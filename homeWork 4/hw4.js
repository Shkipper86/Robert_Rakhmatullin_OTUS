function PreSaveAction() {
    var test = $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html();
    var arr = test.split('');
    var s = arr.length;
    if (s <= 8) {
        var input = prompt('Введите ссылку на договор в формате: название договора#ссылка');
        inputString();
    }
    return true;
}
function inputString() {
    var input = prompt('Введите ссылку на договор в формате: название договора#ссылка');
    var _a = input.split('#'), tit = _a[0], URLP = _a[1], rest = _a.slice(2);
    if (URLP == null) {
        PreSaveAction();
    }
    $('nobr:contains("Договор / Заказ")').closest('tr').find('.ms-rtestate-write').html("<a href=\"" + URLP + "\" target=\"_blank\">" + tit + "</a>");
}
