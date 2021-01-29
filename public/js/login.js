$(document).ready(function () {

  // DOM Variables
  const loginBtnEl = $('#login');
  const userName = $('#user_name');
  const password = $('#password');

  async function loginUser(userData) {
    try {
      const result = await $.ajax({
        url: '/api/login',
        data: userData,
        method: 'POST',
      });

      if (result.message === 'Login Successful!') {
        window.location = '/dashboard';
      } else {
        window.location = '/login';
      }

    } catch (err) {
      console.log(err);
    }
  };

  loginBtnEl.on('click', (e) => {
    e.preventDefault();

    const userData = {
      user_name: userName.val().trim(),
      password: password.val().trim(),
    }

    loginUser(userData);
  });

});