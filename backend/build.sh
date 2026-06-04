#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
cd api
python manage.py collectstatic --no-input
echo "==> Static files in staticfiles/: $(find staticfiles -type f | wc -l) files"
python manage.py migrate
