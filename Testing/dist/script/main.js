document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

const customerOutput = document.getElementById("customer");
const customersOutput = document.getElementById("customers");

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "./customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `<ul>
                      <li>ID: <span> ${customer.id}</span></li>
                      <li>Name:<span> ${customer.name}</span></li>
                      <li>Company:<span> ${customer.company}</span></li>
                      <li>Phone:<span> ${customer.phone}</span></li>
                      </ul>`;

      customerOutput.innerHTML += output;
    }
  };
  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "./customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(customer => {
         output += `<ul>
        <li>ID: <span> ${customer.id}</span></li>
        <li>Name:<span> ${customer.name}</span></li>
        <li>Company:<span> ${customer.company}</span></li>
        <li>Phone:<span> ${customer.phone}</span></li>
        </ul>`;

      } )
     
      customersOutput.innerHTML += output;
    }
  };
  xhr.send();
}
