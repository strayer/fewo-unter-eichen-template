#!/usr/bin/env bash
lessc --verbose -x --clean-css --strict-imports -ru stylesheet.less stylesheet.min.css
