
  function checkForm(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");

    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var address = addressInput.value.trim();

    if (name === "" || phone === "" || address === "") {
      var invalidMsg = document.createElement("p");
      invalidMsg.textContent = "无效";
      invalidMsg.style.color = "red";
      var outputDiv = document.getElementById("output");
      outputDiv.innerHTML = ""; // 清空输出
      outputDiv.appendChild(invalidMsg);
    } else {
      var outputDiv = document.getElementById("output");
      outputDiv.innerHTML = ""; // 清空输出
      alert("表单提交成功");
      // 在这里可以将表单提交到服务器或执行其他操作
    }
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", checkForm);

