const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

    const mentionNote = [
        {mentionName :"TB", mentionInterval : [17, 20]},
        {mentionName : "B", mentionInterval : [14, 16.99]},
        {mentionName : "AB", mentionInterval : [12, 13.99]},
        {mentionName : "P", mentionInterval : [10, 11.99]}
    ]

    function setAverage(students) {
        for (const [key, value] of students) {
            value.average = (value.notes.reduce((prev, curr) => (curr += prev)) / value.notes.length).toFixed(2);
        }
    }

    function setMention(students) {
        for (const [key, value] of students) {
            value.mention = "Aucune mention"
            for(const {mentionName, mentionInterval} of mentionNote) {
                const [min, max] = mentionInterval;
                if (value.average >= min && value.average <= max) {
                    value.mention = mentionName;
                }
            }
        }
    }
    

    setAverage(DataStudents);
    setMention(DataStudents)
    //const Students = DataStudents.map(s => ({ ...s})[1].average = (s[1].notes.reduce((prev, curr) => curr += prev) / s[1].notes.length).toFixed(2))
    console.log(DataStudents)

    const newStudent =  {
        "name": "boby",
        "mention": "",
        "notes": [18, 7, 11],
        "average" : null,
        "url": "http://lorempixel.com/100/100/cats/5"
    }

    function addStudent(students, student, studentKey) {
        let isUse = false;
        let newKey = 0;
        for (const [key, value] of students) {
            newKey++;
           if (studentKey == key){
               isUse = true;
           }
        }
        if (isUse == false) {
            students.push([studentKey, student])
            return;
        }
        newKey = "s" + (newKey + 1);
        students.push([newKey, student])
    }

    addStudent(DataStudents, newStudent, "s5");
    setAverage(DataStudents);
    setMention(DataStudents)
   console.log(DataStudents);
