"use strict";
var gulp = require("gulp");
var sass = require("gulp-dart-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var pixrem = require("pixrem");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var styleguide = require("sc5-styleguide");
var browserSync = require("browser-sync").create();
var clean = require("gulp-clean");
var rename = require("gulp-rename");
var header = require('gulp-header');
var pkg = require('./package.json');
var fs = require('fs');
var gulpif = require('gulp-if');
var minimist = require('minimist');
var switchStream = require('stream-switch');

var knownOptions = {
	string: 'mode',
	default: {
		'mode': "default"
	}
};
var options = minimist(process.argv.slice(2), knownOptions);
var buildInst = options.mode;
var myConsole = console;
// Paths
var PATHS = {
	SRC: "./",
	STYLEGUIDE: "./Strathmore",
	DIST: "./dist",
	DOCS: "./docs",
	CSS: "assets/css/**/*.css",
	CSS_MAPS: "assets/css/**/*.map",
	SCSS: "assets/scss/**/*.scss",
	JS: "assets/js/**/*.js",
	FONTS: "assets/fonts/*",
	IMG: "assets/img/*",
	ICONS: "assets/icons/*",
	STYLEGUIDE_OUTPUT: "Strathmore_" + buildInst,
	SCCS_BUILD_NAME: "index_" + buildInst
};

// Server
gulp.task("serve", ["stylemin"], function () {
	myConsole.log("Gulp: Magic there is a browser!");
	browserSync.init({
		server: "./",
		open: "local",
		startPath: PATHS.STYLEGUIDE_OUTPUT + "/"
	});
	gulp
		.watch(PATHS.STYLEGUIDE_OUTPUT + "/**/*.css")
		.on("change", browserSync.reload);
});

// Style Tasks minified and cleaned
gulp.task("style", function () {
	myConsole.log("Gulp Style Tasks");
	myConsole.log("Gulp: I am making this pretty.");
	myConsole.log(PATHS.SRC + PATHS.SCSS);
	var plugins = [pixrem(), autoprefixer({
		browsers: ["last 2 version"]
	})];
	return gulp
		.src(PATHS.SRC + PATHS.SCSS)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("/maps"))
		.pipe(gulp.dest("./assets/css/"));
});
// Style Tasks minified and cleaned
gulp.task("stylemin", function () {
	myConsole.log("Gulp Style Min Tasks");
	myConsole.log("Gulp: I am folding this into a swan.");
	myConsole.log(PATHS.SRC + PATHS.SCSS);
	var plugins = [
		pixrem(),
		autoprefixer({
			browsers: ["last 2 version"]
		}),
		cssnano()
	];
	return gulp
		.src(PATHS.SRC + PATHS.SCSS)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write("/maps"))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("./assets/css/"));
});

// Cleaning DIST FOLDER
gulp.task("clean:dist", ["stylemin"], function () {
	myConsole.log(' Gulp Cleaning "dist" folder');
	myConsole.log(
		"Gulp: Hold on I am busy cleaning up this mess.  Why do you leave things just lying around."
	);
	return gulp
		.src(PATHS.DIST, {
			read: false
		})
		.pipe(clean());
});

// Cleaning DOCS FOLDER
gulp.task("clean:docs", ["styleguide"], function () {
	myConsole.log(' Gulp Cleaning "docs"');
	myConsole.log(
		"Gulp: Hold on I am busy cleaning up this mess. Dirty socks on the chandelier? .. really?"
	);
	return gulp
		.src(PATHS.DOCS, {
			read: false
		})
		.pipe(clean());
});

// Script Tasks
gulp.task("script", function () {
	myConsole.log(" Gulp Script Tasks");
	myConsole.log(
		'Gulp: This bit goes here and this attaches here. Now where is tab "Omega"?'
	);
});

// Image OPTIMIZE
gulp.task("images", function () {
	myConsole.log("Gulp Images Tasks");
	myConsole.log("Gulp: This is pretty what happens when I smash it!");
});

// Style Guide Tasks. Build and Copy files for the style guide in local
gulp.task("styleguide:generate", ["style"], function () {
	myConsole.log("Gulp Style Guide Tasks");
	myConsole.log("Gulp: Build the Documentation!");
	return gulp
		.src("./assets/css/" + PATHS.SCCS_BUILD_NAME + ".css")
		.pipe(
			styleguide.generate({
				title: "Strathmore - Zurb",
				server: false,
				rootPath: PATHS.STYLEGUIDE_OUTPUT,
				appRoot: "/" + PATHS.STYLEGUIDE_OUTPUT,
				overviewPath: "README.md",
				sideNav: true,
				extraHead: [
					'<link href="https://fonts.googleapis.com/css?family=Maven+Pro|Muli|Roboto+Slab" rel="stylesheet">',
					'<script src="assets/js/jquery.js"></script>',
					'<script src="assets/js/what-input.js" ></script>',
					'<script src="assets/js/foundation/foundation.js"></script>',
					'<script src="assets/js/styleguide.js"></script>'
				],
				afterBody: "",
				styleVariables: false,
				showReferenceNumbers: false,
				disableEncapsulation: true
			})
		)
		.pipe(gulp.dest(PATHS.STYLEGUIDE_OUTPUT));
});

gulp.task("styleguide:applystyles", ["package:strathmore"], function () {
	myConsole.log("Gulp Style Guide Tasks");
	myConsole.log("Gulp: Write it down and record it!");
	return gulp
		.src([
			"./assets/scss/" + PATHS.SCCS_BUILD_NAME + ".scss",
			"./assets/scss/vendor/fontawesome/fontawesome.scss",
			"./assets/scss/vendor/fontawesome/regular.scss",
			"./assets/scss/vendor/fontawesome/fa.sub.brands.scss",
			"./assets/scss/vendor/fontawesome/solid.scss",
			"./assets/scss/vendor/fontawesome/light.scss",
			"./assets/scss/styleguide_override.scss"
		])
		.pipe(sass().on("error", sass.logError))
		.pipe(styleguide.applyStyles())
		.pipe(gulp.dest(PATHS.STYLEGUIDE_OUTPUT));
});

gulp.task("package:strathmore", function () {
	myConsole.log("Gulp Package Tasks");
	myConsole.log(
		"Gulp: Gosh my back is tired. Moving boxes from Assets to the styleguide"
	);
	return gulp
		.src(
			[
				PATHS.SRC + PATHS.FONTS,
				PATHS.SRC + PATHS.ICONS,
				PATHS.SRC + PATHS.JS,
				PATHS.SRC + PATHS.IMG
			], {
				base: "./"
			}
		)
		.pipe(gulp.dest('./' + PATHS.STYLEGUIDE_OUTPUT));
});

// Package Tasks.   Copy files to the Dist Folder.
gulp.task("package:dist", ["addAutomation"], function () {
	myConsole.log("Gulp Package Tasks");
	myConsole.log(
		"Gulp: I got a box and some bubble-wrap; now, where is the tape?"
	);
	myConsole.log("Gulp: All packed up");
	return gulp
		.src(
			[
				PATHS.SRC + PATHS.CSS,
				PATHS.SRC + PATHS.CSS_MAPS,
				PATHS.SRC + PATHS.FONTS,
				PATHS.SRC + PATHS.ICONS,
				PATHS.SRC + PATHS.JS,
				PATHS.SRC + PATHS.IMG,
				PATHS.SRC + PATHS.SCSS
			], {
				base: "./"
			}
		)
		.pipe(gulp.dest(PATHS.DIST));
});
// Package Tasks.   Copy files to the DOCS Folder.
gulp.task("package:docs", ["clean:docs"], function () {
	myConsole.log("Gulp Package DOCS");
	myConsole.log("Gulp: I got a box and tape, but now where is the bubble wrap?");
	myConsole.log("Gulp: All packed up");
	return gulp
		.src([PATHS.STYLEGUIDE + "/**/*.*"], {
			base: "./Strathmore"
		})
		.pipe(gulp.dest(PATHS.DOCS));
});

// Add Automation Tasks to the Dist Folder so it can be used by product teams.
gulp.task("addAutomation", ["clean:dist"], function () {
	gulp
		.src("dist-package.json")
		.pipe(rename("package.json"))
		.pipe(gulp.dest(PATHS.DIST));
	gulp
		.src("dist-gulpfile.js")
		.pipe(rename("gulpfile.js"))
		.pipe(gulp.dest(PATHS.DIST));
});
var supportedBrands = function () {
	return (buildInst == 'acc_zurb' || buildInst == 'acc_boot' || buildInst == 'default' || buildInst == 'cv_boot');
}
gulp.task("buildSCSS", function () {
	if (buildInst == 'default') {
		myConsole.warn("You don't have a --mode set.  Build is set to default. Options for --build are acc_zurb,acc_boot,or cv_boot");
	} else if (supportedBrands()) {
		myConsole.log("You have --mode set. Building styleguide with selected brand and framework.");
	} else {
		myConsole.error("Your --mode is not supported.  Options for --build are acc_zurb,acc_boot,or cv_boot");
		return;
	}
	if (supportedBrands()) {
		gulp.src('assets/scss/gulp_header/_utility_only.scss')
			.pipe(switchStream(buildInst, {
				'acc_zurb': header(fs.readFileSync('assets/scss/components/_zurb.components.scss', 'utf8'), {
					pkg: pkg
				}),
				'default': header(fs.readFileSync('assets/scss/components/_uc-only.components.scss', 'utf8'), {
					pkg: pkg
				})
			}))
			.pipe(header(fs.readFileSync('assets/scss/components/_components.scss', 'utf8'), {
				pkg: pkg
			}))
			.pipe(header(fs.readFileSync('assets/scss/gulp_header/_base-and-brand.scss', 'utf8'), {
				pkg: pkg
			}))
			.pipe(switchStream(buildInst, {
				'acc_zurb': header(fs.readFileSync('assets/scss/gulp_header/_acc-zurb-setup.scss', 'utf8'), {
					pkg: pkg
				}),
				'default': header(fs.readFileSync('assets/scss/gulp_header/_default-setup.scss', 'utf8'), {
					pkg: pkg
				})
			}))
			.pipe(header(fs.readFileSync('assets/scss/gulp_header/_preheader.scss', 'utf8'), {
				pkg: pkg
			}))
			.pipe(rename(PATHS.SCCS_BUILD_NAME + ".scss"))
			.pipe(gulp.dest("assets/scss"));
	}
});
// Watch Tasks
gulp.task("watch", ["styleguide"], function () {
	myConsole.log("Gulp Watch Tasks");
	myConsole.log("Gulp: I will be watching you.... even when you sleep");
	gulp.watch([PATHS.SRC + PATHS.SCSS], ["build"]);
});
// Default
gulp.task("default", ["styleguide", "serve", "watch"]);
gulp.task("build", ["buildSCSS", 'default']);
gulp.task("styleguide", ["styleguide:generate", "styleguide:applystyles"]);
gulp.task("docs", ["package:docs"]);
gulp.task("dist", ["package:dist"]);