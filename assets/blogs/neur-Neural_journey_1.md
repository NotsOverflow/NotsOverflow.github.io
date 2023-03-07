# A Neural Journey - Part 1

### TL;DR

> Neurons are like capacitors with multiple inputs and outputs. They behave differently under different tunable conditions, and if you stack them together, you can approximate any unknown algorithm with enough data.

### We are matter that looks into matter

> We're all just a bunch of atoms bunched together, like a bunch of tiny Lego blocks forming a giant tower. And we're all trying to figure out how the heck we got here and what the heck we're supposed to do now.

Jokes aside, whatever we are, this organ we call a brain is a nice machine. In the next articles, I'll try to summarize what we managed to reverse engineer from what's out there and what we came up with once we removed the chains that our body imposes on it.

### Basic algorithms

1.  DNN: Deep neural networks, basically, you connect a bunch of neurons together. You try to tweak the activation function, number of layers, connections, drops, backpropagation function. All that, to minimize an error function. This is the base of neural networks.
2.  CNN: Convolutional network, like YOLO, really easy network. It works by applying a matrix over another matrix and averaging the values. Like fingerprints, the more pattern matches, the higher the value.
3.  LNN: (loop neural network) It was used for sentiment prediction and language generation before transformers. It feeds back to itself the previous output while adding new input.
4.  GAN: Generative adversarial network. Two networks that compete. One tries to generate a decoder that generates proper output, the second is rewarded for discriminating improper output.
5.  DQL: Deep Q Learning, you save in a table different input/output/rewards pairs. You train a neural network to be rewarded at choosing the best entry given a situation.
6.  Transformers: A mix between a DNN, a CNN, and LNN chained together with a bit of randomness (20% of the time, it uses the wrong output on purpose)

That's most of what I know and can talk about. There is way more, and each of them has its ups and downs, which brings us to...

### What can I do with that?

Well, almost nothing... just kidding, but not really. The compute power to make anything significant so far is reaching an all-time high. The dataset is also rarer than gold.

### So it's impossible?

Not really, you can still use [kaggle](https://www.kaggle.com/datasets) for datasets and [google colab](https://colab.research.google.com/) to get access to a 32GB VRAM Nvidia graphics card for free using a Jupyter notebook-like interface.

Success favors the brave :)

### Training is training

You don't care if you're not coding the model that is used to drive a Tesla or fold molecules. If you manage to understand, use, and train the tools, you're halfway there. And that will be Part 2 of our journey into neural networks :)

