function updateRemoteStudents(array) {
    return array.map(student => { 
        if (!student.location) {
            return {...student, location: "remote"}
        } 
        return student
    })

}

module.exports = updateRemoteStudents;
