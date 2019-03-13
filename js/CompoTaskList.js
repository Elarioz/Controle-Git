class CompoTaskList {
    /**
     * @summary 
     * @param {*} param 
     */
    constructor(param) {
        this.param = param;
    }


    /**
     * @summary Retourne la liste des tâches mise dans le constructeur
     * 
     */
    getTaskList() {
        return this.param.taskList;
    }

    /**
     * @summary Retourne l'élément du DOM passé en paramètre au constructeur
     */
    getElement() {
        return this.param.element;
    }

    /**
     * @summary Déclare la variable children
     * Affiche la liste des tâches dans la console et crée une div pour chaque paramètre
     * Réitère pour chaque nouvelle tâche
     */
    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}