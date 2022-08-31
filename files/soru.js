function Soru(soruMetni, cevapSecenekleri, dogruCevap){
      this.soruMetni = soruMetni;
      this.cevapSecenekleri = cevapSecenekleri;
      this.dogruCevap = dogruCevap;
  }

  Soru.prototype.cevabiKontrolEt = function(cevap){
      return cevap === this.dogruCevap;
  }

  let sorular = [
      new Soru("Honda hangi ülkeye aittir ?", {a: "Amerika", b: "Almanya", c: "Japonya", d: "Rusya"}, "c"),
      new Soru("Türkiye'nin başkenti hangisidir ?", {a: "İstanbul", b: "Antalya", c: "İzmir", d: "Ankara"}, "d"),
      new Soru("Mor şarkısı hangi şarkıcıya aittir ?", {a: "Hande Yener", b: "Gülşen", c: "Tarkan", d: "İbrahim Tatlıses"}, "a"),
      new Soru("Hangisi bir javascript kütüphanesi değildir ?", {a: "Jquery", b: "React", c: "Spring", d: "NodeJS"}, "c")
  ];
  