function redirectMobileUsers() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = "./mobile/"
  }
}

redirectMobileUsers();