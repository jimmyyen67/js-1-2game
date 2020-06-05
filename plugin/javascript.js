swal
  .fire({
    imageUrl: "../img/professor-oak.png",
    imageheight: "200px",
    title: "<strong>您好，我是 <u>大木博士</u></strong>",
    text: "「歡迎來到神奇寶貝的世界！」",
    confirmButtonText: "繼續->",
  })
  .then((result) => {
    swal
      .fire({
        imageUrl: "../img/jeni.png",
        imageheight: "200px",
        title: "<strong>您好，我是 <u>大木博士</u></strong>",
        text: "「這個世界居住著一個叫神奇寶貝的生物，」",
        confirmButtonText: "繼續->",
      })
      .then((result) => {
        swal.fire({
          imageUrl: "../img/fight.png",
          title: "<strong>您好，我是 <u>大木博士</u></strong>",
          text: "「對某些人來說，神奇寶貝是寵物，但也可以拿來打架。」",
          confirmButtonText: "繼續->",
        });
      });
  });
