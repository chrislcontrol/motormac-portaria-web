#!/bin/sh
TARGET=~/Projects/bss-to-react
[[ -z $1 ]]          && echo "argument error: bss export directory required" && exit 1
[[ ! -d $1 ]]        && echo "bss export directory does not exist" && exit 1
[[ ! -d ${TARGET} ]] && echo "target does not exist: ${TARGET}" && exit 1
# is rt installed?
which rt >/dev/null 2>&1
[[ $? -ne 0 ]]       && echo "rt (react-template compiler) is not installed" && exit 1
# main
RC=0
for f in "$1"/*.html; do
    RTFILE="${f%.html}.rt"
    xmllint --html --xpath '/html/body/*' "$f" | tee ${RTFILE}
    sed -i 's|<script .*script>||g' "${RTFILE}"
    sed -i 's|%7B|{|g' "${RTFILE}" # fix due to xmllint/xpath bug 788398
    sed -i 's|%7D|}|g' "${RTFILE}" # fix due to xmllint/xpath bug 788398
    mv "${RTFILE}" "${TARGET}/"
    rt "${TARGET}/$(basename ${RTFILE})"
    RC=$(($RC+$?))
done
exit $RC
