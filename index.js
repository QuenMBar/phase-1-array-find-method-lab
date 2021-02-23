
function superbowlWin(records) {
    let record = records.find(rec => rec.result === "W");
    if (record === undefined) {
        return undefined;
    } else {
        return record.year;
    }

}
