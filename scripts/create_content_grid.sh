content_grid="$(git rev-parse --show-toplevel)/scripts/out/content_grid.csv"

mkdir -p out

echo "Title,Link,Deployment Date,Publish Date,Updated Date,Description,Tags" > "$content_grid"
top_level_files=../_pages/
resource_files=../_pages/_resources/
topic_files=../_pages/_topics/
es_files=../_pages/es/
law_regs_files=../_pages/law-and-regs/
design_standards_files=../_pages/law-and-regs/design-standards/
notice_files=../_pages/notices/_posts/
for file in "$top_level_files"*.md "$resource_files"*.md "$topic_files"*.md "$es_files"*.md "$law_regs_files"*.md "$design_standards_files"*.md "$notice_files"*.md; do
  title="$(sed -n 's/^title:\(.*\)/\1/p' < $file | sed 's/,//g')"
  publish_date="$(sed -n 's/^publish-date:\(.*\)/\1/p' < $file)"
  updated_date="$(sed -n 's/^updated-date:\(.*\)/\1/p' < $file)"
  file_path="$(readlink -nf $file)"
  deployment_date="$(git log --first-parent --follow --format=%ad --date=short $file_path | tail -1)"
  description="$(sed -n 's/^description:\(.*\)/\1/p' < $file | sed 's/,//g')"
  tags="$(awk '/---/{p=0}p;/tags:/{p=1}' $file | tr -d '\n')"

  if [[ "$file" == *"topics"* ]];then
    link="$(grep 'href:' $file| cut -d: -f2)"
  else
    link="$(sed -n 's/^permalink:\(.*\)/\1/p' < $file)"
  fi

  echo "$title,$link,$deployment_date,$publish_date,$updated_date,$description,$tags" | tee -a "$content_grid"
done

echo ""
echo "Content grid created: $content_grid"
