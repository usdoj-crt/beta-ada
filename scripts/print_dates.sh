outfile="$(git rev-parse --show-toplevel)/scripts/out/dates.csv"

mkdir -p out
echo "⌛ This might take a minute, please wait..."
echo ""

echo "Date|File" > "$outfile"
for file in $(git ls-files '*.md'); do
  if [[ ! "$file" =~ ^_pages ]]; then
    continue
  fi

  if [[ "$file" =~ ^_pages/redirects ]]; then
    continue
  fi

  date="$(git log -1 --no-decorate --pretty=format:%cs "$file" 2>&1)"
  echo "$date|$file" | tee -a "$outfile"
done

echo ""
echo "🎉 Dates written to $outfile"
