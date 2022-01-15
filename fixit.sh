

find . -type f -name '*.html' | sed 's!./!!' | while read f
do
  echo "sed s!http.*dit.ie/!/! ${f} > ../dt249.info/${f}"
done
