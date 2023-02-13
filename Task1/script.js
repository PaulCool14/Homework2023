num_1 = parseFloat(prompt('First num'))
num_2 = parseFloat(prompt('Second num'))
document.write (`
<table border="12px">
    <tr>
        <td>+</td>
        <td>${num_1+num_2}</td>
    </tr>
    <tr>
        <td>*</td>
        <td>${num_1*num_2}</td>
    </tr>
    <tr>
        <td>/</td>
        <td>${num_1/num_2},${num_2/num_1}</td>
    </tr>
</table>`)