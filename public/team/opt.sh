mkdir optimized
for f in *.jpg; do
  convert "$f" -strip -quality 85 -resize "361x481^" -gravity center -extent 361x481 "optimized/${f%.*}.webp"
done