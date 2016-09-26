$(function () {
  $(".next-btn").click(function () {
      $(".body-pic").css({
          "transform": "rotateY(90deg)",
          "transition": "transform 1s"
      })
      setTimeout(function () {
        $(".body-symptom").css({
            "transform": "rotateY(360deg)",
            "transition": "transform 1s"
        })
      },1000)


  })
})
