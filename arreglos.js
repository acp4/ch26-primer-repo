// Acp.

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];


for (let i = 0; i < student1Courses.length;  i++){
    let materias = student1Courses[i];
    for (let j = 0; j < student2Courses.length;  j++){
        let materias2 = student2Courses[j];
        if(materias === materias2){
             console.log(" el curso en comun es " + materias); 
        }
    }
}
