function zakazQilish() {
    var son = prompt("Qancha zakaz qilasiz?");
    if (son != null && !isNaN(son) && son > 0) {
        var umumiySumma = son * 45000;
        switch (true) {
            case umumiySumma > 0:
                alert("Zakaz qilindi, jami " + umumiySumma + " som.");
                break;
            default:
                alert("Xatolik yuz berdi.");
        }
    } else {
        alert("Iltimos, to'g'ri son kiriting.");
    }
}