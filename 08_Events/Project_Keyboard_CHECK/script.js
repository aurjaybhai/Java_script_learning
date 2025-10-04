window.addEventListener("keydown", (e) => {
  const insert = document.getElementById("insert");
  insert.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${
          e.key === " " ? "Space" : e.key
        }</td>  <!-- condition ? valueIfTrue : valueIfFalse -->
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;
});
