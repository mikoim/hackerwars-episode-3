var del = require('del');
var path = require('path');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var image = require('gulp-image');
var plumber = require('gulp-plumber');
var run_sequence = require('run-sequence');
var webserver = require('gulp-webserver');

var paths = {
    src: 'src',
    build: 'public',
    html: '',
    css: 'stylesheets',
    js: 'javascripts',
    img: 'images'
};

var src = {
    root: paths.src,
    html: path.join(paths.src, paths.html),
    css: path.join(paths.src, paths.css),
    js: path.join(paths.src, paths.js),
    img: path.join(paths.src, paths.img)
};

var build = {
    root: paths.build,
    html: path.join(paths.build, paths.html),
    css: path.join(paths.build, paths.css),
    js: path.join(paths.build, paths.js),
    img: path.join(paths.build, paths.img)
};

var server = {
    host: 'localhost',
    port: '8080'
};

gulp.task('build', function (callback) {
    run_sequence(
        ['bower', 'compass', 'html', 'image', 'js', 'js-swagger'],
        callback
    )
});

gulp.task('bower', function () {
    var bower_files = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/vue/dist/vue.min.js',
        'bower_components/vue-router/dist/vue-router.min.js'
    ];
    return gulp.src(bower_files)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest(build.js))
});

gulp.task('clean', function() {
    return del(build.root).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'))
    })
});

gulp.task('compass', function () {
    return gulp.src([path.join(src.css, '**/*.scss'), '!' + path.join(src.css, '**/_*.scss')])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err.messageFormatted);
                this.emit('end');
            }
        }))
        .pipe(compass({
            css: build.css,
            sass: src.css,
            comments: false,
            bundle_exec: true
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(build.css))
});

gulp.task('html', function () {
    return gulp.src(path.join(src.html, '**/*.html'))
        .pipe(gulp.dest(build.html));
});

gulp.task('image', function () {
    gulp.src(path.join(src.img, '**/*'))
        .pipe(image())
        .pipe(gulp.dest(build.img))
});

gulp.task('js', function () {
    return gulp.src(path.join(src.js, '**/script.js'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest(build.js))
});

gulp.task('js-swagger', function() {
    gulp.src('src/javascripts/swagger.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(concat('swagger.js'))
        .pipe(gulp.dest(build.js))
});

gulp.task('start', function (callback) {
    run_sequence(
        'build',
        'webserver',
        'watch',
        callback
    )
});

gulp.task('watch', function () {
    gulp.watch(path.join(src.html, '**/*.html'), ['html']);
    gulp.watch(path.join(src.css, '**/*.scss'), ['compass']);
    gulp.watch(path.join(src.js, '**/*.js'), ['js']);
    gulp.watch(path.join(src.img, '**/*'), ['image']);
});

gulp.task('webserver', function () {
    gulp.src(build.root)
        .pipe(webserver({
            host: server.host,
            port: server.port,
            livereload: true
        }))
});
