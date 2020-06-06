const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

let inputOption1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        '#1': '妙蛙種子',
        '#2': '皮卡丘'
      })
    }, 1000)
  });

  let inputOption2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        '#1': '大甲',
        '#2': '皮卡丘'
      })
    }, 1000)
  });