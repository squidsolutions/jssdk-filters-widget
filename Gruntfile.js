module.exports = function(grunt) {
    grunt
            .initConfig({
                jshint : {
                    options: {
                        debug: true
                    },
                    all : [ 'src/*.js' ]
                },
                clean : {
                    all : "dist/"
                },
                bower_concat : {
                    all : {
                        dest : 'build/_bower.js',
                        exclude : [ 'squid_api'],
                        bowerOptions : {
                            relative : false
                        }
                    }
                },
                sass: {
                    dist: {
                        files: {
                            'dist/squid_api_filters-widgets.css': 'src/squid_api_filters_styles.scss'
                        },
                        options: {
                            sourcemap: 'none'
                        }
                    }
                },
                concat : {
                    options : {
                        stripBanners : true,
                    },
                    css : {
                        src : ['bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css', 'src/*.css' ],
                        dest : 'dist/squid_api_filters-widgets.css',
                    },
                    js : {
                        src : [ 'build/templates.js',
                                'src/*.js' ],
                        dest : 'dist/squid_api_filters-widget.js',
                    },
                    dev:{
                        files : {
                            'dist/squid_api_filters_categorical_facet_view.js': ['dist/squid_api_filters_categorical_facet_view_template.js', 'src/squid_api_filters_categorical_facet_view.js'],
                            'dist/squid_api_filters_categorical_paging_view.js': ['dist/squid_api_filters_categorical_paging_view_template.js', 'src/squid_api_filters_categorical_paging_view.js'],
                            'dist/squid_api_filters_categorical_selected_view.js': ['dist/squid_api_filters_categorical_selected_view_template.js', 'src/squid_api_filters_categorical_selected_view.js'],
                            'dist/squid_api_filters_categorical_view.js': ['dist/squid_api_filters_categorical_view_template.js', 'src/squid_api_filters_categorical_view.js'],
                            'dist/squid_api_filters_categorical_widget.js': ['dist/squid_api_filters_categorical_widget_template.js', 'src/squid_api_filters_categorical_widget.js'],
                            'dist/squid_api_filters_date_filter_selection_widget.js': ['dist/squid_api_filters_date_filter_selection_widget_template.js', 'src/squid_api_filters_date_filter_selection_widget.js'],
                            'dist/squid_api_filters_date_selection_widget.js': ['dist/squid_api_filters_date_selection_widget_template.js', 'src/squid_api_filters_date_selection_widget.js'],
                            'dist/squid_api_filters_segment_widget.js': ['dist/squid_api_filters_segment_widget_template.js', 'src/squid_api_filters_segment_widget.js'],
                            'dist/squid_api_selection_widget.js': ['dist/squid_api_selection_widget_template.js', 'src/squid_api_selection_widget.js'],
                        }
                    }
                },
                copy: {
                    devDist: {
                        files: [{
                            expand: true,
                            flatten: true,
                            src : [ 'src/*.js' ],
                            dest: 'dist'
                        }]
                    }
                },
                handlebars : {
                    options : {
                        namespace : 'squid_api.template',
                        processName : function(filePath) {
                            return filePath.replace(/^.*\//, '').replace(
                                    /\.hbs$/, '');
                        }
                    },
                    all : {
                        files : {
                            "build/templates.js" : [ "src/*.hbs" ]
                        }
                    },
                    dev:{
                        files : {
                            'dist/squid_api_filters_categorical_facet_view_template.js': ['src/squid_api_filters_categorical_facet_view.hbs'],
                            'dist/squid_api_filters_categorical_paging_view_template.js': ['src/squid_api_filters_categorical_paging_view.hbs'],
                            'dist/squid_api_filters_categorical_selected_view_template.js': ['src/squid_api_filters_categorical_selected_view.hbs'],
                            'dist/squid_api_filters_categorical_view_template.js': ['src/squid_api_filters_categorical_view.hbs'],
                            'dist/squid_api_filters_categorical_widget_template.js': ['src/squid_api_filters_categorical_widget.hbs'],
                            'dist/squid_api_filters_date_filter_selection_widget_template.js': ['src/squid_api_filters_date_filter_selection_widget.hbs'],
                            'dist/squid_api_filters_date_selection_widget_template.js': ['src/squid_api_filters_date_selection_widget.hbs'],
                            'dist/squid_api_filters_segment_widget_template.js': ['src/squid_api_filters_segment_widget.hbs'],
                            'dist/squid_api_selection_widget_template.js': ['src/squid_api_selection_widget.hbs'],
                        }
                    }
                },
                wiredep : {
                    target : {
                        src : [ 'test.html' ],
                    }
                },
                watch : {
                    js : {
                        files : [ 'src/**/*.*' ],
                        tasks : [ 'default' ]
                    }
                }
            });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('devDist', [ 'jshint', 'clean', 'handlebars:dev', 'copy:devDist', 'concat:dev', 'sass', 'wiredep' ]);

    grunt.registerTask('default', [ 'jshint', 'clean', 'handlebars:all', 'concat:css', 'concat:js', 'sass', 'wiredep']);
};
