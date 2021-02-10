class Node {
	constructor(value) {
		this.value = value;
		this.descendants = [];
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	add(value, node) {
		const n = new Node(value);
		const parent = node ? this.findBFS(node) : null;

		if (parent) {
			parent.descendants.push(n);
		} else {
			if (!this.root) {
				this.root = n;
			} else {
				return 'Root already exists.';
			}
		}
	}

	findBFS(value) {
		let queue = [this.root];
		while (queue.length) {
			let n = queue.shift();
			if (n.value === value) {
				return n;
			}
			for (let i = 0; i < n.descendants.length; i++) {
				queue.push(n.descendants[i]);
			}
		}

		return null;
	}

	print() {
		if (!this.root) {
			return console.log('No root node found');
		}
		const newline = new Node('|');
		let queue = [this.root, newline];
		let string = '';
		while (queue.length) {
			let n = queue.shift();
			string += n.value.toString() + ' ';
			if (n === newline && queue.length) {
				queue.push(newline);
			}
			for (let i = 0; i < n.descendants.length; i++) {
				queue.push(n.descendants[i]);
			}
		}
		console.log(string.slice(0, -2).trim());
	}
}

const tree = new Tree();
tree.add('Adverb');
tree.add('Pronoun', 'Adverb');
tree.add('Determiner', 'Adverb');

tree.add('Adverb', 'Pronoun');
tree.add('Verb', 'Adverb');
tree.add('Preposition', 'Verb');
tree.add('Determiner', 'Preposition');
tree.add('Adjective', 'Determiner');
tree.add('Noun', 'Determiner');
tree.add('Noun', 'Adjective');
tree.print();
