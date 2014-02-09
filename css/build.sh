#!/usr/bin/env bash
lessc stylesheet.less > stylesheet.css
uglifycss stylesheet.css > stylesheet.min.css
