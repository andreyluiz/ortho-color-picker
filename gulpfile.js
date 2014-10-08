var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concatcss = require('gulp-concat-css'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-htmlmin');

gulp.task('clean', function() {
    return gulp.src(['build', 'dist'], {read: false})
        .pipe(clean());
});

// Javascript
gulp.task('vendorjs', ['clean'], function() {
    return gulp.src(['app/bower_components/modernizr/modernizr.js',
                     'app/bower_components/jquery/dist/jquery.js',
                     'app/bower_components/bootstrap/dist/js/bootstrap.js',
                     'app/bower_components/angular/angular.js',
                     'app/bower_components/angular-route/angular-route.js',
                     'app/js/app.js',
                     'app/js/controllers.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('appjs', ['vendorjs'], function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('javascripts.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('concatjs', ['vendorjs', 'appjs'], function() {
    return gulp.src(['build/js/vendor.js', 
                     'build/js/javascripts.js', 
                     'build/js/templates.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('minifyjs', ['concatjs'], function() {
    return gulp.src('build/js/all.js')
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// CSS
gulp.task('vendorcss', ['clean'], function() {
    return gulp.src(['app/bower_components/bootstrap/dist/css/bootstrap.css',
                     'app/bower_components/normalize.css/normalize.css'])
        .pipe(concatcss('vendor.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('appcss', ['vendorcss'], function() {
    return gulp.src('app/css/*.css')
        .pipe(concatcss('appcss.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('concatcss', ['vendorcss', 'appcss'], function() {
    return gulp.src('build/css/*.css')
        .pipe(concatcss('all.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('minifycss', ['concatcss'], function() {
    return gulp.src('build/css/all.css')
        .pipe(minifycss({keepBreaks:true}))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Images
gulp.task('moveimg', ['clean'], function() {
    return gulp.src('app/img/*.png')
        .pipe(gulp.dest('build/img'))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('moveicons', ['clean'], function() {
    return gulp.src('app/img/icons/*')
        .pipe(gulp.dest('build/img/icons'))
        .pipe(gulp.dest('dist/img/icons'));
});

// HTML
gulp.task('minifyhtml', ['clean'], function() {
    return gulp.src('app/index-pro.html')
        .pipe(minifyhtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('build'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifypartials', ['clean'], function() {
    return gulp.src('app/partials/*.html')
        .pipe(minifyhtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('build/partials'))
        .pipe(gulp.dest('dist/partials'))
});

gulp.task('javascript', ['vendorjs', 'appjs', 'concatjs', 'minifyjs']);
gulp.task('css', ['vendorcss', 'appcss', 'concatcss', 'minifycss']);
gulp.task('image', ['moveimg', 'moveicons']);
gulp.task('html', ['minifyhtml', 'minifypartials']);

gulp.task('default', ['clean', 'javascript', 'css', 'image', 'html'])
