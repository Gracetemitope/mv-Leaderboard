export const displayUI = () => {


const div = document.createElement('div')
div.innerHTML = `
<div>
<h1 class="text-center mt-3">Leaderboard</h1>
<div class="d-flex justify-content-around mt-3">
  <div class="d-flex flex-column">
    <div class="d-flex">
      <h3 class="mr-3">Recent scores</h3>
      <button class="btn btn-outline-dark mr-3">Refresh</button>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="d-flex flex-column">
    <h3 class="text-danger mb-3">Add your Score</h3>
    <input type="text" placeholder="Your name" class="form-control mb-3">
    <input type="text" placeholder="Your score" class="form-control mb-3">
    <button>Submit</button>
  </div>
</div>
</div>
`
document.body.appendChild(div)

}