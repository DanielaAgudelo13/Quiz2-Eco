const form = document.querySelector(".form");
const normal = document.querySelector(".normal");
const silver = document.querySelector(".silver");
const gold = document.querySelector(".gold");

const validateInfo = (name, code, course) => {
    if (name == "" || code == "" || course == "") {
        alert("Por favor completa todos los campos");
        return false;
    }

    let newInfo = true;

    students.on("value", function (snapshot) {
        snapshot.forEach((data) => {
            let student = data.val();

            if (student.code == code && student.course == course) {
                newInfo = false;
            }
        });
    });

    if (!newInfo) {
        alert("El estudiante ya se encuentra registrado");
    }
    return newInfo;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value;
    const code = form.code.value;
    const course = form.course.value;

    if (validateInfo(name, code, course)) {
        let reference = students.push();

        const info = {
            id: reference.key,
            name: name,
            code: code,
            course: course,
            participations: 0,
        };

        reference.set(info);

        form.name.value = "";
        form.code.value = "";
        form.course.value = "";
    }
});

students.on("value", function (snapshot) {
    normal.innerHTML = "";
    silver.innerHTML = "";
    gold.innerHTML = "";

    snapshot.forEach((data) => {
        let student = data.val();

        let card = new Card(student);

        if (student.participations > 10) {
            gold.appendChild(card.render());
        } else if (student.participations > 5) {
            silver.appendChild(card.render());
        } else {
            normal.appendChild(card.render());
        }
    });
});
