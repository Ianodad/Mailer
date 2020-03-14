const students = [{
        id: 1,
        student: 'Schuyler,Shawdforth',
        Email: 'sshawdforth0@ask.com',
        IP1: 29,
        IP2: 17,
        IP3: 19,
        IP4: 27,
        Attendance: '100%',
        '1st_Recommendation': 'Yes',
        Reason_One: '',
        '2nd_Recommendation': 'Yes',
        Reason_Two: ''
    },
    {
        id: 2,
        student: 'Any,Gillon',
        Email: 'agillon1@nationalgeographic.com',
        IP1: 31,
        IP2: 18,
        IP3: 17,
        IP4: 24,
        Attendance: '94%',
        '1st_Recommendation': 'Yes',
        Reason_One: '',
        '2nd_Recommendation': 'Yes',
        Reason_Two: ''
    },
    {
        id: 3,
        student: 'Minni,Tattersdill',
        Email: 'mtattersdill2@ibm.com',
        IP1: 30,
        IP2: 13,
        IP3: 20,
        IP4: 20,
        Attendance: '94%',
        '1st_Recommendation': 'Yes',
        Reason_One: '',
        '2nd_Recommendation': 'Yes',
        Reason_Two: ''
    },
    {
        id: 4,
        student: 'Carey,Locker',
        Email: 'clocker3@chron.com',
        IP1: 29,
        IP2: 20,
        IP3: 20,
        IP4: 25,
        Attendance: '100%',
        '1st_Recommendation': 'Yes',
        Reason_One: '',
        '2nd_Recommendation': 'Yes',
        Reason_Two: ''
    },
    {
        id: 5,
        student: 'Leland,Clohessy',
        Email: 'lclohessy4@ow.ly',
        IP1: 23,
        IP2: 16,
        IP3: 17,
        IP4: 23,
        Attendance: '98%',
        '1st_Recommendation': 'Yes',
        Reason_One: '',
        '2nd_Recommendation': 'Yes',
        Reason_Two: ''
    },
    {
        id: 6,
        student: 'Brnaby,Clitheroe',
        Email: 'bclitheroe5@live.com',
        IP1: 20,
        IP2: 14,
        IP3: 15,
        IP4: 15,
        Attendance: '99%',
        '1st_Recommendation': 'No',
        Reason_One: 'IP quality and completion',
        '2nd_Recommendation': 'No',
        Reason_Two: 'IP quality and completion'
    },
    {
        id: 7,
        student: 'Mannie,NuzztiM',
        Email: 'mnuzzti6@github.io',
        IP1: 16,
        IP2: 14,
        IP3: 16,
        IP4: 20,
        Attendance: '99%',
        '1st_Recommendation': 'No',
        Reason_One: 'IP quality and completion',
        '2nd_Recommendation': 'No',
        Reason_Two: 'IP quality and completion'
    },
    {
        id: 8,
        student: 'Renato,Deverille',
        Email: 'rdeverille7@canalblog.com',
        IP1: 21,
        IP2: 14,
        IP3: 14,
        IP4: 16,
        Attendance: '100%',
        '1st_Recommendation': 'No',
        Reason_One: 'IP quality and completion',
        '2nd_Recommendation': 'No',
        Reason_Two: 'IP quality and completion'
    },
    {
        id: 9,
        student: 'Muffin,Lambkin',
        Email: 'mlambkin8@jigsy.com',
        IP1: 23,
        IP2: 13,
        IP3: 14,
        IP4: 16,
        Attendance: '94%',
        '1st_Recommendation': 'No',
        Reason_One: 'IP quality and completion',
        '2nd_Recommendation': 'No',
        Reason_Two: 'IP quality and completion'
    },
    {
        id: 10,
        student: 'Celka,Wellbelove',
        Email: 'cwellbelove9@time.com',
        IP1: 27,
        IP2: 12,
        IP3: 15,
        IP4: 21,
        Attendance: '100%',
        '1st_Recommendation': 'No',
        Reason_One: 'IP quality and completion',
        '2nd_Recommendation': 'No',
        Reason_Two: 'IP quality and completion'
    },
    {
        id: 11,
        student: 'Kamana ella',
        Email: 'kami112@gm.com',
        IP1: 20,
        IP2: 17,
        IP3: 18,
        IP4: 10,
        Attendance: '70%',
        '1st_Recommendation': 'No',
        Reason_One: 'absents',
        '2nd_Recommendation': 'No',
        Reason_Two: 'attendence is too low'
    },
    {
        id: 12,
        student: 'gwiza nowa',
        Email: 'gwimo43@gmail.com',
        IP1: '',
        IP2: '',
        IP3: '',
        IP4: '',
        Attendance: '',
        '1st_Recommendation': '',
        Reason_One: '',
        '2nd_Recommendation': '',
        Reason_Two: ''
    }
];

function getStudents() {
    return students;
}

function getStudent(id) {
    return students.find((s) => s.id === parseInt(id));
}
module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;