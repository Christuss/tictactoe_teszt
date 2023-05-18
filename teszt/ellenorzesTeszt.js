import Jatekter from "../Jatekter.js";

QUnit.module('játéktér ellenőrzés metódusaihoz tartozó tagfüggvényeknek tesztelése', function (hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test('ellenorzes létezik-e?', function (assert) {
        assert.ok(jatekter.ellenorzes, "Létezik az elenorzes tagfüggvény");
    });

    QUnit.test('getAtlo létezik-e?', function (assert) {
        assert.ok(jatekter.getAtlo, "Létezik a getAtlo tagfüggvény");
    });

    QUnit.test('getFuggoleges létezik-e?', function (assert) {
        assert.ok(jatekter.getFuggoleges, "Létezik az getFuggoleges tagfüggvény");
    });

    QUnit.test('getVizszintes létezik-e?', function (assert) {
        assert.ok(jatekter.getVizszintes, "Létezik az getVizszintes tagfüggvény");
    });

});

QUnit.module("járéktér getVizszintes tesztelése", function (hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("üres lista", function (assert) {
        jatekter.lista = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "   @   @   @");
    });

    QUnit.test("3x egymás mellett", function (assert) {
        jatekter.lista = [
            "X", "X", "X",
            " ", " ", " ",
            " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "XXX@   @   @");
    });

    QUnit.test("3o egymás mellett", function (assert) {
        jatekter.lista = [
            " ", " ", " ",
            "O", "O", "O",
            " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "   @OOO@   @");
    });

    QUnit.test("3 ' ' egymás mellett", function (assert) {
        jatekter.lista = [
            "X", "O", "X",
            " ", " ", " ",
            "O", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "XOX@   @OXO@");
    });

    QUnit.test("véletlen elrendezés nincs nyerés", function (assert) {
        jatekter.lista = [
            "O", "O", "X",
            "X", " ", " ",
            " ", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "OOX@X  @ XO@");
    });

    QUnit.test("minden ki van töltve, nincs nyerés", function (assert) {
        jatekter.lista = [
            "X", "O", "X",
            "O", "X", "O",
            "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "XOX@OXO@XXO@");
    });

    QUnit.test("minden ki van töltve, van nyerés", function (assert) {
        jatekter.lista = [
            "X", "O", "X",
            "X", "O", "O",
            "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "XOX@XOO@XXO@");
    });

    QUnit.test("az utolsó oszlopban és a következő sor elején van 2 elem", function (assert) {
        jatekter.lista = [
            " ", " ", "X",
            "O", " ", " ",
            " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "  X@O  @   @");
    });
});

QUnit.module("járéktér getFuggoleges tesztelése", function (hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("üres lista", function (assert) {
        jatekter.lista = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "   @   @   @");
    });

    QUnit.test("3x egymás mellett", function (assert) {
        jatekter.lista = [
            "X", " ", " ",
            "X", " ", " ",
            "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "XXX@   @   @");
    });

    QUnit.test("3o egymás mellett", function (assert) {
        jatekter.lista = [
            " ", "O", " ",
            " ", "O", " ",
            " ", "O", " "];
        assert.equal(jatekter.getFuggoleges(), "   @OOO@   @");
    });

    QUnit.test("3 ' ' egymás mellett", function (assert) {
        jatekter.lista = [
            "X", " ", "O",
            "O", " ", "X",
            "X", " ", "O"];
        assert.equal(jatekter.getFuggoleges(), "XOX@   @OXO@");
    });

    QUnit.test("véletlen elrendezés nincs nyerés", function (assert) {
        jatekter.lista = [
            "O", "X", " ",
            "O", " ", "X",
            "X", " ", "O"];
        assert.equal(jatekter.getFuggoleges(), "OOX@X  @ XO@");
    });

    QUnit.test("minden ki van töltve, nincs nyerés", function (assert) {
        jatekter.lista = [
            "X", "O", "X",
            "O", "X", "X",
            "X", "O", "O"];
        assert.equal(jatekter.getFuggoleges(), "XOX@OXO@XXO@");
    });

    QUnit.test("minden ki van töltve, van nyerés", function (assert) {
        jatekter.lista = [
            "X", "X", "X",
            "O", "O", "X",
            "X", "O", "O"];
        assert.equal(jatekter.getFuggoleges(), "XOX@XOO@XXO@");
    });

    QUnit.test("az utolsó oszlopban és a következő sor elején van 2 elem", function (assert) {
        jatekter.lista = [
            " ", "O", " ",
            " ", " ", " ",
            "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "  X@O  @   @");
    });
});

QUnit.module("járéktér getAtlo tesztelése", function (hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("üres lista", function (assert) {
        jatekter.lista = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
        assert.equal(jatekter.getAtlo(), "   @   ");
    });

    QUnit.test("3x egymás mellett", function (assert) {
        jatekter.lista = [
            "X", " ", " ",
            " ", "X", " ",
            " ", " ", "X"];
        assert.equal(jatekter.getAtlo(), "XXX@ X ");
    });

    QUnit.test("3o egymás mellett", function (assert) {
        jatekter.lista = [
            " ", " ", "O",
            " ", "O", " ",
            "O", " ", " "];
        assert.equal(jatekter.getAtlo(), " O @OOO");
    });

    QUnit.test("3 ' ' egymás mellett", function (assert) {
        jatekter.lista = [
            " ", " ", "O",
            " ", " ", " ",
            "O", " ", " "];
        assert.equal(jatekter.getAtlo(), "   @O O");
    });

    QUnit.test("véletlen elrendezés nincs nyerés", function (assert) {
        jatekter.lista = [
            "O", "X", " ",
            "O", " ", "X",
            "X", " ", "O"];
        assert.equal(jatekter.getAtlo(), "O O@  X");
    });
    QUnit.test("minden ki van töltve, nincs nyerés", function (assert) {
        jatekter.lista = [
            "X", "O", "X",
            "O", "X", "X",
            "O", "O", "O"];
        assert.equal(jatekter.getAtlo(), "XXO@XXO");
    });

    QUnit.test("minden ki van töltve, van nyerés", function (assert) {
        jatekter.lista = [
            "X", "X", "X",
            "O", "O", "X",
            "X", "O", "O"];
        assert.equal(jatekter.getAtlo(), "XOO@XOX@");
    });

    QUnit.test("az utolsó oszlopban és a következő sor elején van 2 elem", function (assert) {
        jatekter.lista = [
            " ", "O", " ",
            " ", " ", " ",
            "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "  X@O  @   @");
    });
})