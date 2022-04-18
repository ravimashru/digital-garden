---
title: Using TPUs on Google Colab
publish: true
created: '2019-07-07'
updated: '2019-12-25'
tags:
  - deep-learning
  - devlog
fileName: Using TPUs on Google Colab
---


*Update (25 December 2019) - This approach doesn't work anymore. The TPU API changed in TF 1.15 which is now the version on Colab by default.*

1: Change imports from `keras` to `tensorflow.keras`.

```python
from tensorflow.keras.layers import ...
from tensorflow.keras.models import Model
from tensorflow.keras.regularizers import l2
from tensorflow.keras import backend as K
```

2: Convert keras model to TPU model.

```python
import os

tpu_model = tensorflow.contrib.tpu.keras_to_tpu_model(
    model,
    strategy=tf.contrib.tpu.TPUDistributionStrategy(
        tf.contrib.cluster_resolver.TPUClusterResolver(tpu='grpc://' + os.environ['COLAB_TPU_ADDR'])
    )
)

tpu_model.compile(
    optimizer='sgd',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)
```
^ `model` is a normal Keras model.

3: Using callbacks

The import of callbacks will change to:
```python
from tensorflow.keras.callbacks import *
```
