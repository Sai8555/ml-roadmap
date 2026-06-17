# 🚀 Interactive Machine Learning Engineer Roadmap

Welcome to the **Machine Learning Engineer Roadmap**! This repository contains an interactive curriculum designed to guide you from mathematical foundations all the way to production MLOps and Generative AI.

Whether you're starting from scratch or looking to solidify your skills, this roadmap provides structured learning paths, mathematical formulas, Python code implementations, and curated learning resources.

---

## 🌟 Live Interactive Version
We host a fully interactive web app with search, progress tracking, code snippets, and direct links.
👉 **[Open Live Interactive Roadmap](https://Sai8555.github.io/ml-roadmap/)**

---

## 🗺️ Roadmap Curriculum Overview

The roadmap is divided into **6 learning phases** comprising **21 core topics**:

### Phase 1: Mathematics & Foundations
1. **Linear Algebra**: Vectors, matrices, matrix multiplication, SVD, and eigenvalues/eigenvectors.
2. **Calculus**: Derivatives, partial derivatives, chain rule, and gradients (the engine of Gradient Descent).
3. **Probability & Statistics**: Bayes' theorem, probability distributions, and hypothesis testing.

### Phase 2: Programming & Data Science
4. **Python & Git Foundations**: OOP, virtual environments, package management, and version control.
5. **Data Manipulation (NumPy & Pandas)**: Multidimensional arrays, dataframes, and clean data processing.
6. **Data Visualization**: Matplotlib, Seaborn, and Exploratory Data Analysis (EDA).
7. **Preprocessing & Validation**: Scaling, encoding, train-test splitting, and Cross-Validation.

### Phase 3: Classical Machine Learning
8. **Supervised Learning - Regression**: Linear Regression, Ridge, Lasso, and regression evaluation metrics.
9. **Supervised Learning - Classification**: Logistic Regression, Decision Trees, Support Vector Machines (SVMs).
10. **Ensemble Methods**: Bagging (Random Forest) and Boosting (XGBoost, LightGBM).
11. **Unsupervised Learning**: K-Means clustering and PCA for dimensionality reduction.

### Phase 4: Deep Learning
12. **Neural Network Basics**: Perceptrons, activation functions, feedforward, and backpropagation.
13. **PyTorch Fundamentals**: Tensors, autograd, writing custom modules, and training loops.
14. **Computer Vision (CNNs)**: Convolutions, pooling, spatial feature learning, and image classifiers.
15. **Sequence Models (RNNs & LSTMs)**: Recurrent architectures, handling sequential and time-series data.

### Phase 5: Advanced & Generative AI
16. **Transformers & Self-Attention**: Self-attention mechanism, multi-head attention, and Encoder/Decoder architectures (BERT, GPT).
17. **Large Language Models & RAG**: Fine-tuning (LoRA), prompt engineering, and Retrieval-Augmented Generation.
18. **Generative Models**: GANs and Diffusion Models for synthetic image generation.

### Phase 6: MLOps & Production
19. **Model Serving & APIs**: FastAPI, serialization, and serving predictions via endpoints.
20. **Docker & Containerization**: Writing Dockerfiles, containerizing ML models, and isolated environments.
21. **Monitoring & Experiment Tracking**: MLflow, logging metrics, and monitoring data/concept drift.

---

## 💻 Local Setup & Development

If you want to run the interactive web app locally, install the dependencies and start the Vite dev server:

1. Clone this repository:
   ```bash
   git clone https://github.com/Sai8555/ml-roadmap.git
   cd ml-roadmap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the displayed local URL in your browser (typically `http://localhost:5173`).

---

## 📝 Example Concept: Linear Algebra in ML

Linear Algebra is the language of machine learning. In ML, datasets are represented as matrices, and algorithms are formulated as matrix operations.

### Core Equation: Eigenvalues & Eigenvectors
Linear transformations that only scale a vector:
$$A \vec{v} = \lambda \vec{v}$$
Where $A$ is a square matrix, $\vec{v}$ is the eigenvector, and $\lambda$ is the eigenvalue.

### Python Code:
```python
import numpy as np

# Create matrix and vector
v = np.array([1, 2, 3])
A = np.array([[1, 2], [3, 4], [5, 6]])

# Matrix multiplication (Dot product)
B = np.array([[7, 8], [9, 10]])
C = A @ B

# Eigenvalues and Eigenvectors
square_matrix = np.array([[4, 2], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(square_matrix)
```

---

## 🤝 Contributing & Feedback
Feel free to fork this repository, submit issues, or open pull requests to improve the curriculum, add resources, or enhance the interactive web application!
