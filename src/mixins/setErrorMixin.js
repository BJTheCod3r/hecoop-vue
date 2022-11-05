export default {
    data() {
        return {
            processing: false
        }
    },
    computed: {
        classObject() {
            return {
                "d-flex": this.processing,
                "align-items-center": this.processing,
                "justify-content-center": this.processing,
            };
        },
    },
    methods: {
        getErrors(errors) {
            let errs = []
            Object.keys(errors).forEach(key => {
                errors[key].forEach(err => {
                    errs.push({message: err, visible: true})
                })
            })
            return errs
        }
    }
}