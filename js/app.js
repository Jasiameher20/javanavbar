
let button = document.querySelector('nav span')

button.addEventListener('mouseover', sidebarOpen)
let sidebar = document.querySelector('.sidebar')

function sidebarOpen()
{
  sidebar.classList.toggle('active')
}