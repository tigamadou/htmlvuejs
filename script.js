new Vue({
    // By specifying the HTML id in this el, the instance of Vue.js will be imported in the DOM of that id.
    el: '#app',
    // data is an attribute (value) of the defined Vue.js instance
    data: {
      name: 'A mountain B ro',
      course: 'Web Engineer Course',
      acceptancePeriod: 'January 2019',
      defaultLastId: 3,
      error: false,
      errorMsg: 'Please fill all the fields!',
      students: [
        { id: 1, name: 'Hiroyoshi Noro', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
        { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
        { id: 3, name: 'Kazuki Saito', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
      ]
    },
    // In methods, describe the method you want to use for the instance of Vue.js
    methods: {
      addStudent: function(data) {
        this.error =false; 
          const {name, course, acceptancePeriod} = this
          if(name.trim() == '' ||course.trim() == '' ||acceptancePeriod.trim() == ''){
            this.error =true;   
            return false
          }
        this.defaultLastId = this.defaultLastId += 1
        this.students = [...this.students,
            {
                id: this.defaultLastId,
                name,
                course,
                acceptancePeriod
            }
        ]

        this.name = ''
        this.course = ''
        this.acceptancePeriod = ''

        
      }
    }
  })