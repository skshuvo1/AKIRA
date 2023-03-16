shopNowBtn = () => {
    const displayForm = document.getElementById('modal-container');
    displayForm.innerHTML = `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Please fill up this form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ms-4">
      <h5>Email</h5>
      <input class = "mb-3" type="email" placeholder="Enter your email"></br>
      <h5>Password</h5>
      <input type="password" placeholder="Enter your password">
      <h5>sex</h5>
  <input type="radio" value="HTML">
  <label for="html">male</label><br>
  <input type="radio" value="CSS">
  <label for="css">female</label><br>
  <input type="radio" value="JavaScript">
  <label for="javascript">others</label>
  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
}
shopNowBtn();