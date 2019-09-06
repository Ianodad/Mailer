const express = require('express');
const router = express.Router();
const {
    getStudent,
    getStudents
} = require('../service/students');

const {
    sendMail
} = require('../mailer/mailer');

function status(p1, p2, p3, p4) {
    const passmark = 70;
    const total = p1 + p2 + p3 + p4;
    const result = total / 103 * 100;
    // console.log(result);
    return {
        remark: result > 70 ? 'Congratulations you have PASSED the course' : 'Sorry to you failed the benchmarking',
        percentage: result.toFixed(2)
    };
}

let emailStatus = '';

router.get('/:id', (req, res) => {
    // console.log(req.params.id);
    const student = getStudent(req.params.id);
    // console.log(student);

    // const trail = status(student.IP1, student.IP2, student.IP3, student.IP4);
    let processed = {
        id: req.params.id,
        name: student.student,
        email: student.Email,
        IP1: student.IP1,
        IP2: student.IP2,
        IP3: student.IP3,
        IP4: student.IP4,
        Attendance: student.Attendance,
        Status: status(student.IP1, student.IP2, student.IP3, student.IP4),
        Email: student.Email
        // "1st_Recommendation": student.1st_Recommendation,
        // "Reasons": student.Reason_One,
        // "2nd_Recommendation": student.2nd_Recommendation,
        // "Reasons": student.Reason_Two,
    };
    let emailStatus = processed;
    res.render('view', {
        processed
    });
});

router.get('/submit/:id', async (req, res) => {
    const student = getStudent(req.params.id);

    let processed = {
        id: req.params.id,
        name: student.student,
        email: student.Email,
        IP1: student.IP1,
        IP2: student.IP2,
        IP3: student.IP3,
        IP4: student.IP4,
        Attendance: student.Attendance,
        Status: status(student.IP1, student.IP2, student.IP3, student.IP4),
        Email: student.Email
        // "1st_Recommendation": student.1st_Recommendation,
        // "Reasons": student.Reason_One,
        // "2nd_Recommendation": student.2nd_Recommendation,
        // "Reasons": student.Reason_Two,
    };

    // console.log(processed);
    const back = await sendMail(processed);
    res.render('submit', {
        back: back
    })
});

module.exports = router;