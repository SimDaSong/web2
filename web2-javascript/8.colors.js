var Body = {
    setColor: function(color) {
      document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function(color) {
      document.querySelector("body").style.backgroundColor = color;
    }
  };
  var Link = {
    setColor: function(color) {
      var alist = document.querySelectorAll("a");

      for (var i = 0; i < alist.length; i++) {
        alist[i].style.color = color;
      }
    }
  };
  function nightDayHandler(self) {
    // 매개 변수로 안 주면 this가 안 먹음
    var target = document.querySelector("body"); // 변수 선언을 통한 코드의 중복 해소
    var alist = document.querySelectorAll("a");

    if (self.value == "night") {
      // # 붙여주기
      Body.setBackgroundColor("black");
      Body.setColor("white");
      self.value = "day"; // 이 코드 없으면 night로 바뀌고 멈춤
      Link.setColor("powderblue");

    } else {
      Body.setBackgroundColor("white");
      Body.setColor("black");
      self.value = "night";

      for (var i = 0; i < alist.length; i++) {
        alist[i].style.color = "blue";
      }
    }
  }