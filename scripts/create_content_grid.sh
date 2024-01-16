content_grid="$(git rev-parse --show-toplevel)/scripts/out/content_grid.xls"

mkdir -p out

echo "Title,Link,Publish Date,Updated Date,Description,Tags" > "$content_grid"
top_level_files=../_pages/
resource_files=../_pages/_resources/
topic_files=../_pages/_topics/
es_files=../_pages/es/
law_regs_files=../_pages/law-and-regs/
notice_files=../_pages/notices/_posts/
for file in "$top_level_files"*.md "$resource_files"*.md "$topic_files"*.md "$es_files"*.md "$law_regs_files"*.md "$notice_files"*.md; do
  title="$(sed -n 's/^title:\(.*\)/\1/p' < $file | sed 's/,//g')"
  publish_date="$(sed -n 's/^publish-date:\(.*\)/\1/p' < $file)"
  updated_date="$(sed -n 's/^updated-date:\(.*\)/\1/p' < $file)"
  description="$(sed -n 's/^description:\(.*\)/\1/p' < $file | sed 's/,//g')"
  tags="$(awk '/---/{p=0}p;/tags:/{p=1}' $file | tr -d '\n')"

  if [[ "$file" == *"topics"* ]];then
    link="$(grep 'href:' $file| cut -d: -f2)"
  else
    link="$(sed -n 's/^permalink:\(.*\)/\1/p' < $file)"
  fi

  echo "$title,$link,$publish_date,$updated_date,$description,$tags" | tee -a "$content_grid"
done

echo ""
echo "Content grid created: $content_grid"