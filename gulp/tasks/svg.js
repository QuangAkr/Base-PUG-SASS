let svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    svgPath = {
        "input": "./dev/static/images/svg/*.svg",
        "output": "./build/static/images/svg/",
        "output2": "../themes/shipperviet/assets/static/images/svg"
    };

module.exports = function () {
    $.gulp.task('svg', () => {
        // $.gulp.src(svgPath.input).pipe($.gulp.dest(svgPath.output2));

        return $.gulp.src(svgPath.input)
            .pipe($.gulp.dest(svgPath.output));
        // return $.gulp.src(svgPath.input)
        //     .pipe(svgmin({
        //         js2svg: {
        //             pretty: true
        //         }
        //     }))
        //     .pipe(cheerio({
        //         run: function ($) {
        //             $('[fill]').removeAttr('fill');
        //             $('[stroke]').removeAttr('stroke');
        //             $('[style]').removeAttr('style');
        //         },
        //         parserOptions: {xmlMode: true}
        //     }))
        //     .pipe(replace('&gt;', '>'))
        //     .pipe(svgSprite({
        //         mode: {
        //             symbol: {
        //                 sprite: "sprite.svg"
        //             }
        //         }
        //     }))
        //     .pipe($.gulp.dest(svgPath.output));
    });
};
