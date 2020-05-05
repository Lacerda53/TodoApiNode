const array = [];

module.exports = {
    index(req, res) {
        return res.status(200).json(array);
    },
    details(req, res) {
        const { id } = req.params;
        const arrayById = array.find(x => x.id === id);
        return res.status(200).json(arrayById);
    },
    create(req, res) {
        const { tarefa } = req.body;
        const id = "_" + Math.random().toString(36).substr(2, 9);
        array.push({ id: id, tarefa: tarefa });
        return res.status(201).json(array);
    },
    update(req, res) {
        const { id } = req.params;
        const index = array.findIndex(x => x.id == id);
        array[index].tarefa = req.body.tarefa;
        return res.status(200).json(array);
    },
    delete(req, res) {
        const { id } = req.params;
        const index = array.findIndex(x => x.id == id);
        array.splice(index, 1);
        return res.status(200).json(array);
    }
}