export const roadmapData = [
  // PHASE 1
  {
    id: "linear-algebra",
    phase: 1,
    phaseTitle: "Phase 1: Mathematics & Foundations",
    title: "Linear Algebra",
    difficulty: "Beginner",
    subtitle: "Vectors, matrices, matrix multiplication, and eigenvalues.",
    concept: "Linear Algebra is the language of machine learning. It provides the framework for representing data and performing operations on high-dimensional spaces. In ML, datasets are represented as matrices, and algorithms are formulated as matrix operations.",
    math: `<h4>Core Formulas & Concepts:</h4>
<ul>
  <li><strong>Vector Representation:</strong> An ordered list of numbers. In 2D, \\( \\vec{v} = [x, y]^T \\).</li>
  <li><strong>Matrix Multiplication:</strong> For matrices \\( A \\) (size \\( m \\times n \\)) and \\( B \\) (size \\( n \\times p \\)), the product \\( C = AB \\) has elements \\( C_{ij} = \\sum_{k=1}^n A_{ik} B_{kj} \\).</li>
  <li><strong>Eigenvalues & Eigenvectors:</strong> Linear transformations that only scale a vector. Defined by the characteristic equation:
    <div style="text-align: center; margin: 10px 0;">\\( A \\vec{v} = \\lambda \\vec{v} \\)</div>
    where \\( A \\) is a square matrix, \\( \\vec{v} \\) is the eigenvector, and \\( \\lambda \\) is the eigenvalue.
  </li>
  <li><strong>Singular Value Decomposition (SVD):</strong> Decomposing any matrix into three constituent matrices: \\( A = U \\Sigma V^T \\). Crucial for dimensionality reduction (PCA).</li>
</ul>`,
    code: `import numpy as np

# Create vectors and matrices
v = np.array([1, 2, 3])
A = np.array([[1, 2], [3, 4], [5, 6]])

# Matrix multiplication (Dot product)
B = np.array([[7, 8], [9, 10]])
C = np.dot(A, B) # or A @ B
print("Matrix Multiplication result:\\n", C)

# Eigenvalues and Eigenvectors (Square matrix required)
square_matrix = np.array([[4, 2], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(square_matrix)
print("\\nEigenvalues:", eigenvalues)
print("Eigenvectors:\\n", eigenvectors)

# Singular Value Decomposition (SVD)
U, S, Vt = np.linalg.svd(A)
print("\\nSVD - U shape:", U.shape, "S shape:", S.shape, "Vt shape:", Vt.shape)`,
    resources: [
      { name: "3Blue1Brown - Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "Video Series" },
      { name: "MIT 18.06 Linear Algebra - Gilbert Strang", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", type: "Course" },
      { name: "Linear Algebra for Machine Learning - Imperial College London", url: "https://www.coursera.org/learn/linear-algebra-machine-learning", type: "Course" }
    ]
  },
  {
    id: "calculus",
    phase: 1,
    phaseTitle: "Phase 1: Mathematics & Foundations",
    title: "Calculus",
    difficulty: "Beginner",
    subtitle: "Derivatives, partial derivatives, chain rule, and gradients.",
    concept: "Calculus helps us understand how functions change. In machine learning, optimization algorithms (like gradient descent) use derivatives to find the minimum of a cost/loss function by iteratively adjusting model parameters.",
    math: `<h4>Core Formulas & Concepts:</h4>
<ul>
  <li><strong>Derivative:</strong> The rate of change of a function. For \\( y = f(x) \\), \\( f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\).</li>
  <li><strong>Chain Rule:</strong> Used to compute derivatives of composite functions (essential for neural network backpropagation):
    <div style="text-align: center; margin: 10px 0;">\\( \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\)</div>
  </li>
  <li><strong>Partial Derivatives:</strong> Derivative of a multivariable function with respect to one variable, holding others constant: \\( \\frac{\\partial f}{\\partial x} \\).</li>
  <li><strong>Gradient:</strong> Vector of all partial derivatives of a multivariable function, pointing in the direction of steepest ascent:
    <div style="text-align: center; margin: 10px 0;">\\( \\nabla f(x_1, x_2, ...) = \\left[ \\frac{\\partial f}{\\partial x_1}, \\frac{\\partial f}{\\partial x_2}, ... \\right] \\)</div>
  </li>
  <li><strong>Gradient Descent Update:</strong> \\( \\theta_{new} = \\theta_{old} - \\alpha \\nabla L(\\theta) \\) (where \\( \\alpha \\) is the learning rate, and \\( L \\) is the loss).</li>
</ul>`,
    code: `# Symbolic derivative with SymPy
import sympy as sp

x, y = sp.symbols('x y')
f = x**2 * y + sp.sin(x)

# Partial derivative with respect to x
df_dx = sp.diff(f, x)
# Partial derivative with respect to y
df_dy = sp.diff(f, y)

print("Function f(x, y) =", f)
print("df/dx =", df_dx)
print("df/dy =", df_dy)

# Numerical gradient using autograd (PyTorch preview)
import torch
x_tensor = torch.tensor([2.0], requires_grad=True)
y_tensor = x_tensor**3 + 4 * x_tensor**2
y_tensor.backward()
print("\\nPyTorch Numerical Gradient dy/dx at x=2:", x_tensor.grad.item())`,
    resources: [
      { name: "3Blue1Brown - Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", type: "Video Series" },
      { name: "Multivariate Calculus - Imperial College London", url: "https://www.coursera.org/learn/multivariate-calculus-machine-learning", type: "Course" },
      { name: "Khan Academy - Multivariable Calculus", url: "https://www.khanacademy.org/math/multivariable-calculus", type: "Course" }
    ]
  },
  {
    id: "prob-stats",
    phase: 1,
    phaseTitle: "Phase 1: Mathematics & Foundations",
    title: "Probability & Statistics",
    difficulty: "Intermediate",
    subtitle: "Bayes' theorem, probability distributions, and hypothesis testing.",
    concept: "Machine learning deals with uncertainty and patterns. Probability allows us to model noise, make predictions with confidence estimates, and formulate algorithms (like Naive Bayes). Statistics helps us analyze, summarize, and validate data and model performance.",
    math: `<h4>Core Formulas & Concepts:</h4>
<ul>
  <li><strong>Bayes' Theorem:</strong> Relates conditional and marginal probabilities:
    <div style="text-align: center; margin: 10px 0;">\\( P(A|B) = \\frac{P(B|A)P(A)}{P(B)} \\)</div>
  </li>
  <li><strong>Mean (Expected Value) & Variance:</strong>
    <div style="text-align: center; margin: 10px 0;">\\( \\mu = E[X] = \\sum x P(x) \\)</div>
    <div style="text-align: center; margin: 10px 0;">\\( \\sigma^2 = E[(X - \\mu)^2] \\)</div>
  </li>
  <li><strong>Normal (Gaussian) Distribution:</strong> Key distribution for real-world phenomena:
    <div style="text-align: center; margin: 10px 0;">\\( f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2} \\)</div>
  </li>
  <li><strong>Maximum Likelihood Estimation (MLE):</strong> Method of estimating parameters of a probability distribution by maximizing a likelihood function.</li>
</ul>`,
    code: `import numpy as np
from scipy import stats

# Generate random data from normal distribution
np.random.seed(42)
data = np.random.normal(loc=10.0, scale=2.0, size=100)

# Descriptive Statistics
mean = np.mean(data)
median = np.median(data)
std_dev = np.std(data)
print(f"Mean: {mean:.2f}, Median: {median:.2f}, Std Dev: {std_dev:.2f}")

# Bayes' Theorem calculation
# P(Disease|Positive) = P(Positive|Disease) * P(Disease) / P(Positive)
p_disease = 0.01
p_pos_given_disease = 0.99
p_pos_given_no_disease = 0.05
p_no_disease = 1 - p_disease
p_positive = (p_pos_given_disease * p_disease) + (p_pos_given_no_disease * p_no_disease)

p_disease_given_positive = (p_pos_given_disease * p_disease) / p_positive
print(f"P(Disease|Positive Test): {p_disease_given_positive * 100:.2f}%")

# T-test (Hypothesis Testing)
group_a = np.random.normal(10, 2, 30)
group_b = np.random.normal(11, 2, 30)
t_stat, p_val = stats.ttest_ind(group_a, group_b)
print(f"T-statistic: {t_stat:.2f}, P-value: {p_val:.4f}")`,
    resources: [
      { name: "Khan Academy - Statistics and Probability", url: "https://www.khanacademy.org/math/statistics-probability", type: "Course" },
      { name: "StatQuest with Josh Starmer - Probability & Statistics", url: "https://youtube.com/playlist?list=PLtBw6njzU-MvOPxP_uJ4_yU_uGZ8OOhp0", type: "Video Series" },
      { name: "Introduction to Probability - Joseph K. Blitzstein", url: "https://www.edx.org/course/introduction-to-probability", type: "Course" }
    ]
  },

  // PHASE 2
  {
    id: "python-git",
    phase: 2,
    phaseTitle: "Phase 2: Programming & Data Engineering",
    title: "Python & Git Foundations",
    difficulty: "Beginner",
    subtitle: "Clean Python syntax, OOP, virtual environments, and Git version control.",
    concept: "Python is the undisputed standard language for Machine Learning. It has a rich ecosystem of libraries. Good programming practices (clean code, OOP) and version control (Git) are vital for collaborative, reproducible, and production-ready ML engineering.",
    math: `<h4>Key Programming Practices:</h4>
<ul>
  <li><strong>Object-Oriented Programming (OOP):</strong> Designing code using Classes and Objects to encapsulate state and behavior (e.g., custom PyTorch layers).</li>
  <li><strong>Virtual Environments:</strong> Keeping dependencies isolated per project to avoid dependency hell (using <code>venv</code>, <code>conda</code>, or <code>poetry</code>).</li>
  <li><strong>Git Version Control:</strong> Saving codebase states, branching, merging, and collaborating.</li>
</ul>`,
    code: `class MLModel:
    def __init__(self, name):
        self.name = name
        self.is_trained = False
        
    def train(self, data):
        print(f"Training {self.name} on {len(data)} samples...")
        self.is_trained = True
        
    def predict(self, x):
        if not self.is_trained:
            raise ValueError("Model must be trained before predicting.")
        return [val * 2 for val in x]

# Instantiate and use the class
model = MLModel("DoubleRegressor")
samples = [1, 2, 3, 4]
model.train(samples)
predictions = model.predict(samples)
print("Predictions:", predictions)

# Git commands reference:
# git init
# git add .
# git commit -m "Initialize project"
# git checkout -b feature/model-training`,
    resources: [
      { name: "Python for Everybody (PY4E)", url: "https://www.py4e.com/", type: "Course" },
      { name: "Git & GitHub Crash Course for Beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", type: "Video" },
      { name: "Real Python Tutorials", url: "https://realpython.com/", type: "Articles" }
    ]
  },
  {
    id: "numpy-pandas",
    phase: 2,
    phaseTitle: "Phase 2: Programming & Data Engineering",
    title: "Data Manipulation (NumPy & Pandas)",
    difficulty: "Beginner",
    subtitle: "High-performance vector operations and structured data manipulation.",
    concept: "NumPy provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions. Pandas builds on NumPy to offer high-performance, easy-to-use data structures (DataFrames) for handling tabular, time-series, and relational data.",
    math: `<h4>Computational Efficiency:</h4>
<ul>
  <li><strong>Vectorization:</strong> Performing operations on whole arrays instead of looping through individual elements. This utilizes low-level optimized C/Fortran routines.</li>
  <li><strong>Broadcasting:</strong> How NumPy treats arrays with different shapes during arithmetic operations (e.g., adding a vector to a matrix).</li>
</ul>`,
    code: `import numpy as np
import pandas as pd

# NumPy Vectorization vs Loops
a = np.random.rand(1000000)
b = np.random.rand(1000000)
# Fast vectorized multiplication
c = a * b 

# Pandas DataFrame operations
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, np.nan, 30, 22],
    'Salary': [70000, 80000, np.nan, 50000]
}
df = pd.DataFrame(data)

# Data Cleaning
# Fill missing age with median
df['Age'] = df['Age'].fillna(df['Age'].median())
# Drop rows where Salary is missing
df = df.dropna(subset=['Salary'])

# Querying and Aggregation
high_earners = df[df['Salary'] > 60000]
mean_salary = df['Salary'].mean()

print("Cleaned DataFrame:\\n", df)
print(f"Mean Salary: {mean_salary:.2f}")`,
    resources: [
      { name: "NumPy Quickstart Guide", url: "https://numpy.org/doc/stable/user/quickstart.html", type: "Documentation" },
      { name: "Pandas 10-Minute Guide", url: "https://pandas.pydata.org/docs/user_guide/10min.html", type: "Documentation" },
      { name: "Kaggle Course: Pandas", url: "https://www.kaggle.com/learn/pandas", type: "Interactive Tutorial" }
    ]
  },
  {
    id: "data-visualization",
    phase: 2,
    phaseTitle: "Phase 2: Programming & Data Engineering",
    title: "Data Visualization",
    difficulty: "Beginner",
    subtitle: "Exploratory Data Analysis (EDA) using plotting libraries.",
    concept: "Data visualization is the cornerstone of Exploratory Data Analysis (EDA). It allows you to understand data distributions, spot outliers, identify linear or non-linear relationships, and communicate findings visually using tools like Matplotlib and Seaborn.",
    math: `<h4>Visual Exploration of Distributions:</h4>
<ul>
  <li><strong>Histogram:</strong> Represents the frequency distribution of a continuous variable.</li>
  <li><strong>Scatter Plot:</strong> Displays the relationship between two variables, highlighting correlations.</li>
  <li><strong>Heatmap:</strong> Represents tabular data where values are depicted by color. Crucial for correlation matrices.</li>
</ul>`,
    code: `import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# Generate dummy dataset
np.random.seed(0)
df = pd.DataFrame({
    'Feature_A': np.random.normal(0, 1, 100),
    'Feature_B': np.random.normal(5, 2, 100),
    'Target': np.random.choice([0, 1], size=100)
})

# Add correlation
df['Feature_B'] = df['Feature_B'] + df['Feature_A'] * 1.5

# Create a figure with subplots
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Scatter plot using Seaborn
sns.scatterplot(data=df, x='Feature_A', y='Feature_B', hue='Target', ax=axes[0])
axes[0].set_title("Feature Relationship")

# Correlation Heatmap
corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', ax=axes[1])
axes[1].set_title("Correlation Matrix")

plt.tight_layout()
# In a real environment, you would call plt.show() or save the figure
# plt.savefig('eda_plots.png')
print("EDA plots created and configured.")`,
    resources: [
      { name: "Seaborn Tutorial Gallery", url: "https://seaborn.pydata.org/tutorial.html", type: "Documentation" },
      { name: "Python Graph Gallery", url: "https://python-graph-gallery.com/", type: "Reference" },
      { name: "Kaggle Course: Data Visualization", url: "https://www.kaggle.com/learn/data-visualization", type: "Interactive Tutorial" }
    ]
  },

  // PHASE 3
  {
    id: "preprocessing",
    phase: 3,
    phaseTitle: "Phase 3: Classical Machine Learning",
    title: "Preprocessing & Validation",
    difficulty: "Beginner",
    subtitle: "Data scaling, categorical encoding, train-test splitting, and cross-validation.",
    concept: "Raw data is rarely ready for ML algorithms. Preprocessing scales numerical values, encodes text/categorical values into numbers, and handles missing data. Validation strategies, such as train-test split and k-fold cross-validation, ensure our models generalize to unseen data.",
    math: `<h4>Pre-processing & Validation Math:</h4>
<ul>
  <li><strong>Standardization (Z-score Scaling):</strong> Centers data to zero mean and unit variance:
    <div style="text-align: center; margin: 10px 0;">\\( x_{scaled} = \\frac{x - \\mu}{\\sigma} \\)</div>
  </li>
  <li><strong>Min-Max Scaling:</strong> Binds values between 0 and 1:
    <div style="text-align: center; margin: 10px 0;">\\( x_{scaled} = \\frac{x - x_{min}}{x_{max} - x_{min}} \\)</div>
  </li>
  <li><strong>K-Fold Cross-Validation:</strong> Splits the data into \\( K \\) folds. The model is trained on \\( K-1 \\) folds and validated on the remaining fold, repeating the process \\( K \\) times to yield a reliable evaluation score.</li>
</ul>`,
    code: `from sklearn.model_selection import train_test_split, KFold
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
import pandas as pd
import numpy as np

# Sample tabular data
data = pd.DataFrame({
    'Salary': [50000, 60000, 120000, 90000],
    'City': ['New York', 'London', 'London', 'Paris'],
    'Experience_Years': [2, 3, 10, 7],
    'Target': [0, 0, 1, 1]
})

X = data.drop('Target', axis=1)
y = data['Target']

# Define split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define column transformer for different pre-processing
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), ['Salary', 'Experience_Years']),
        ('cat', OneHotEncoder(), ['City'])
    ]
)

# Fit and transform training data, transform test data
X_train_preprocessed = preprocessor.fit_transform(X_train)
X_test_preprocessed = preprocessor.transform(X_test)

print("Preprocessed Train Data:\\n", X_train_preprocessed)

# Cross Validation setup
kf = KFold(n_splits=3, shuffle=True, random_state=42)
for fold, (train_idx, val_idx) in enumerate(kf.split(X)):
    print(f"Fold {fold+1}: Train indices {train_idx}, Validation indices {val_idx}")`,
    resources: [
      { name: "Scikit-Learn Guide: Dataset transformation", url: "https://scikit-learn.org/stable/modules/preprocessing.html", type: "Documentation" },
      { name: "Data Preprocessing for Machine Learning", url: "https://towardsdatascience.com/data-preprocessing-for-machine-learning-101-3dd1a1d22616", type: "Article" }
    ]
  },
  {
    id: "supervised-regression",
    phase: 3,
    phaseTitle: "Phase 3: Classical Machine Learning",
    title: "Supervised: Regression",
    difficulty: "Beginner",
    subtitle: "Predicting continuous values using Linear Regression, Ridge, and Lasso.",
    concept: "Regression is used when the target variable is continuous (e.g., housing prices, stock value). Linear Regression assumes a linear relationship between input features and target. Regularized regression (Ridge, Lasso) adds penalty terms to prevent overfitting by shrinking coefficients.",
    math: `<h4>Mathematical Formulations:</h4>
<ul>
  <li><strong>Linear Regression Equation:</strong> \\( \\hat{y} = w_0 + w_1 x_1 + w_2 x_2 + ... + w_n x_n = \\vec{w}^T \\vec{x} \\)</li>
  <li><strong>Mean Squared Error (MSE) Loss:</strong>
    <div style="text-align: center; margin: 10px 0;">\\( L_{MSE}(\\vec{w}) = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\vec{w}^T \\vec{x}_i)^2 \\)</div>
  </li>
  <li><strong>Ridge Regression (L2 Regularization):</strong> Minimizes MSE + sum of squared weights:
    <div style="text-align: center; margin: 10px 0;">\\( L_{Ridge} = L_{MSE} + \\lambda \\sum_{j=1}^n w_j^2 \\)</div>
  </li>
  <li><strong>Lasso Regression (L1 Regularization):</strong> Minimizes MSE + sum of absolute weights (induces sparsity/feature selection):
    <div style="text-align: center; margin: 10px 0;">\\( L_{Lasso} = L_{MSE} + \\lambda \\sum_{j=1}^n |w_j| \\)</div>
  </li>
</ul>`,
    code: `from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Synthetic linear data
np.random.seed(42)
X = np.random.rand(100, 1) * 10
y = 2.5 * X + 1.2 + np.random.normal(0, 1.5, (100, 1))

# Fit Linear Regression
lin_reg = LinearRegression()
lin_reg.fit(X, y)
y_pred = lin_reg.predict(X)

print(f"Intercept: {lin_reg.intercept_[0]:.3f}")
print(f"Coefficient: {lin_reg.coef_[0][0]:.3f}")
print(f"R² Score: {r2_score(y, y_pred):.3f}")
print(f"MSE: {mean_squared_error(y, y_pred):.3f}")

# Ridge (L2) and Lasso (L1) examples
ridge = Ridge(alpha=1.0)
ridge.fit(X, y)
lasso = Lasso(alpha=0.1)
lasso.fit(X, y)`,
    resources: [
      { name: "StatQuest: Linear Regression", url: "https://www.youtube.com/watch?v=NkI9ia2CL38", type: "Video" },
      { name: "StatQuest: L1 (Lasso) & L2 (Ridge) Regularization", url: "https://www.youtube.com/watch?v=Q81RR3yKn30", type: "Video" },
      { name: "Intro to Statistical Learning (ISLR)", url: "https://www.statlearning.com/", type: "Book" }
    ]
  },
  {
    id: "supervised-classification",
    phase: 3,
    phaseTitle: "Phase 3: Classical Machine Learning",
    title: "Supervised: Classification",
    difficulty: "Beginner",
    subtitle: "Predicting discrete categories using Logistic Regression, Decision Trees, and SVMs.",
    concept: "Classification is used when the target variable is categorical (e.g., Email Spam vs Not Spam). We predict probabilities of belonging to a class and evaluate models using confusion matrices, precision, recall, and ROC-AUC curves.",
    math: `<h4>Core Mathematics:</h4>
<ul>
  <li><strong>Sigmoid Function:</strong> Maps any real-valued number into a probability between 0 and 1:
    <div style="text-align: center; margin: 10px 0;">\\( \\sigma(z) = \\frac{1}{1 + e^{-z}} \\)</div>
  </li>
  <li><strong>Logistic Regression Loss (Binary Cross-Entropy):</strong>
    <div style="text-align: center; margin: 10px 0;">\\( L = -\\frac{1}{N} \\sum_{i=1}^N \\left[ y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i) \\right] \\)</div>
  </li>
  <li><strong>Precision & Recall:</strong>
    <div style="text-align: center; margin: 10px 0;">\\( Precision = \\frac{TP}{TP+FP} \\), \\( Recall = \\frac{TP}{TP+FN} \\)</div>
  </li>
</ul>`,
    code: `from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.model_selection import train_test_split

# Generate classification dataset
X, y = make_classification(n_samples=500, n_features=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Logistic Regression
clf = LogisticRegression()
clf.fit(X_train, y_train)
preds = clf.predict(X_test)
probs = clf.predict_proba(X_test)[:, 1]

print("Classification Report:\\n", classification_report(y_test, preds))
print(f"ROC-AUC Score: {roc_auc_score(y_test, probs):.3f}")

# Decision Tree Classifier
tree = DecisionTreeClassifier(max_depth=3)
tree.fit(X_train, y_train)`,
    resources: [
      { name: "StatQuest: Logistic Regression", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8", type: "Video" },
      { name: "StatQuest: Decision Trees", url: "https://www.youtube.com/watch?v=7VeUPuFGJHk", type: "Video" },
      { name: "Introduction to Support Vector Machines (SVMs)", url: "https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a44f78d92", type: "Article" }
    ]
  },
  {
    id: "ensemble-methods",
    phase: 3,
    phaseTitle: "Phase 3: Classical Machine Learning",
    title: "Ensemble Methods",
    difficulty: "Intermediate",
    subtitle: "Combining multiple weak models using Bagging (Random Forest) and Boosting (XGBoost).",
    concept: "Ensemble methods combine predictions from multiple base estimators to improve generalization and robustness over a single estimator. Bagging decreases variance (e.g., Random Forests), whereas Boosting decreases bias sequentially (e.g., XGBoost, LightGBM).",
    math: `<h4>Ensemble Paradigms:</h4>
<ul>
  <li><strong>Bagging (Bootstrap Aggregating):</strong> Fits multiple independent models on bootstrapped subsets of training data and averages predictions (or takes a majority vote).
    <div style="text-align: center; margin: 10px 0;">\\( \\hat{f}_{bag}(x) = \\frac{1}{B} \\sum_{b=1}^B f^b(x) \\)</div>
  </li>
  <li><strong>Boosting:</strong> Sequentially fits weak models, where each new model focuses on correcting the errors made by its predecessors by weighting poorly predicted points.</li>
</ul>`,
    code: `from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
# Note: To use xgboost, install it via: pip install xgboost
# from xgboost import XGBClassifier 

X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Random Forest Classifier (Bagging)
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
print(f"Random Forest Accuracy: {rf.score(X_test, y_test):.3f}")

# Gradient Boosting Classifier (Boosting)
gb = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)
gb.fit(X_train, y_train)
print(f"Gradient Boosting Accuracy: {gb.score(X_test, y_test):.3f}")`,
    resources: [
      { name: "StatQuest: Random Forests", url: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ", type: "Video" },
      { name: "StatQuest: AdaBoost", url: "https://www.youtube.com/watch?v=LsK-xG1cLYA", type: "Video" },
      { name: "XGBoost Documentation Guide", url: "https://xgboost.readthedocs.io/en/stable/", type: "Documentation" }
    ]
  },
  {
    id: "unsupervised-learning",
    phase: 3,
    phaseTitle: "Phase 3: Classical Machine Learning",
    title: "Unsupervised Learning",
    difficulty: "Intermediate",
    subtitle: "Clustering and Dimensionality Reduction using K-Means and PCA.",
    concept: "Unsupervised Learning is used when datasets do not contain target labels. Clustering finds hidden groups of similar items (e.g. customer segmentation). Dimensionality reduction techniques project high-dimensional data into lower-dimensional space while preserving essential structural information.",
    math: `<h4>Mathematical Models:</h4>
<ul>
  <li><strong>K-Means Clustering Objective:</strong> Minimizes the within-cluster sum of squares (inertia):
    <div style="text-align: center; margin: 10px 0;">\\( J = \\sum_{i=1}^k \\sum_{x \\in S_i} ||x - \\mu_i||^2 \\)</div>
    where \\( \\mu_i \\) is the centroid of cluster \\( S_i \\).
  </li>
  <li><strong>Principal Component Analysis (PCA):</strong> Projects data onto orthogonal directions (principal components) that maximize variance. This is done by computing the eigenvectors of the covariance matrix.</li>
</ul>`,
    code: `from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import numpy as np

# Synthetic clustered data
np.random.seed(42)
X = np.vstack([
    np.random.normal(0, 1, (50, 4)),
    np.random.normal(5, 1, (50, 4)),
    np.random.normal(10, 2, (50, 4))
])

# K-Means Clustering
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)
print("Cluster Centroids Shape:", kmeans.cluster_centers_.shape)

# Principal Component Analysis (Reduce from 4D to 2D)
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)
print("Original shape:", X.shape)
print("Reduced shape:", X_reduced.shape)
print("Explained variance ratio:", pca.explained_variance_ratio_)`,
    resources: [
      { name: "StatQuest: K-Means Clustering", url: "https://www.youtube.com/watch?v=4b5d3muPQmA", type: "Video" },
      { name: "StatQuest: Principal Component Analysis (PCA)", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ", type: "Video" },
      { name: "Visualizing Data using t-SNE", url: "https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf", type: "Paper" }
    ]
  },

  // PHASE 4
  {
    id: "neural-network-basics",
    phase: 4,
    phaseTitle: "Phase 4: Deep Learning & Neural Networks",
    title: "Neural Network Basics",
    difficulty: "Intermediate",
    subtitle: "Perceptrons, activation functions, feedforward, and backpropagation.",
    concept: "Artificial Neural Networks are biologically-inspired mathematical models. A Multi-Layer Perceptron (MLP) consists of input, hidden, and output layers. It uses non-linear activation functions to map complex non-linear functions, and backpropagation to calculate parameter updates via the chain rule.",
    math: `<h4>Core Mathematics:</h4>
<ul>
  <li><strong>Single Neuron Output:</strong> \\( a = g(z) = g(\\vec{w}^T \\vec{x} + b) \\) (where \\( g \\) is an activation function).</li>
  <li><strong>Common Activation Functions:</strong>
    <ul>
      <li>Sigmoid: \\( g(z) = \\frac{1}{1 + e^{-z}} \\)</li>
      <li>ReLU: \\( g(z) = \\max(0, z) \\)</li>
      <li>Softmax (Multi-class): \\( a_i = \\frac{e^{z_i}}{\\sum_{j} e^{z_j}} \\)</li>
    </ul>
  </li>
  <li><strong>Backpropagation (Chain Rule):</strong>
    <div style="text-align: center; margin: 10px 0;">\\( \\frac{\\partial Loss}{\\partial w_k} = \\frac{\\partial Loss}{\\partial a} \\cdot \\frac{\\partial a}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w_k} \\)</div>
  </li>
</ul>`,
    code: `import numpy as np

# Simple forward pass of a single neuron
def relu(z):
    return np.maximum(0, z)

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Inputs, weights, bias
x = np.array([0.5, -0.2, 0.1])
w = np.array([0.4, 0.3, -0.5])
b = 0.1

# Compute linear combination z
z = np.dot(w, x) + b
# Apply non-linear activation
a = relu(z)

print("z (linear output):", z)
print("a (activated output):", a)`,
    resources: [
      { name: "3Blue1Brown - Neural Networks Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "Video Series" },
      { name: "Deep Learning Specialization (Coursera) - Andrew Ng", url: "https://www.coursera.org/specializations/deep-learning", type: "Course" },
      { name: "Deep Learning Book - Ian Goodfellow et al.", url: "https://www.deeplearningbook.org/", type: "Book" }
    ]
  },
  {
    id: "pytorch-fundamentals",
    phase: 4,
    phaseTitle: "Phase 4: Deep Learning & Neural Networks",
    title: "PyTorch Fundamentals",
    difficulty: "Intermediate",
    subtitle: "Tensors, autograd, custom model modules, and writing training loops.",
    concept: "PyTorch is a dynamic, developer-friendly deep learning library. It represents data as multi-dimensional tensors, supports GPU acceleration, and features automatic differentiation (autograd) to automatically compute gradients of arbitrary graphs.",
    math: `<h4>Computational Graph & Backpropagation:</h4>
<ul>
  <li><strong>Tensors:</strong> Multi-dimensional arrays similar to NumPy arrays, but optimized for running on GPUs.</li>
  <li><strong>Autograd:</strong> PyTorch tracks all operations on tensors that have <code>requires_grad=True</code> to build a directed acyclic graph (DAG) representing the math. Running <code>.backward()</code> computes gradients of a leaf node (e.g. loss) with respect to parameter nodes.</li>
</ul>`,
    code: `import torch
import torch.nn as nn
import torch.optim as optim

# 1. Define Model
class SimpleMLP(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super(SimpleMLP, self).__init__()
        self.fc1 = nn.Linear(input_dim, hidden_dim)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_dim, output_dim)
        
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 2. Setup Data, Loss, and Optimizer
model = SimpleMLP(input_dim=10, hidden_dim=5, output_dim=1)
criterion = nn.MSELoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Synthetic PyTorch Tensors
x_train = torch.randn(32, 10)
y_train = torch.randn(32, 1)

# 3. Training Loop Step
optimizer.zero_grad()            # Clear previous gradients
predictions = model(x_train)    # Forward pass
loss = criterion(predictions, y_train) # Calculate loss
loss.backward()                  # Backward pass (compute gradients)
optimizer.step()                 # Update parameters (gradient descent)

print(f"Loss after 1 step: {loss.item():.4f}")`,
    resources: [
      { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "Documentation" },
      { name: "PyTorch for Deep Learning Bootcamp - Daniel Bourke", url: "https://www.youtube.com/watch?v=V_xro1bcAuA", type: "Video" },
      { name: "Deep Learning with PyTorch Book (Free PDF)", url: "https://pytorch.org/assets/deep-learning/Deep-Learning-with-PyTorch.pdf", type: "Book" }
    ]
  },
  {
    id: "computer-vision",
    phase: 4,
    phaseTitle: "Phase 4: Deep Learning & Neural Networks",
    title: "Computer Vision (CNNs)",
    difficulty: "Advanced",
    subtitle: "Spatial features, convolution layers, pooling, and image classifiers.",
    concept: "Convolutional Neural Networks (CNNs) are specialized neural networks for grid-like data such as images. Standard MLPs flatten images, destroying spatial local relationships. CNNs use shared kernel weights (convolutions) to slide over images, preserving spatial orientation and reducing parameters.",
    math: `<h4>CNN Math:</h4>
<ul>
  <li><strong>Convolution Operation:</strong> Element-wise multiplication of an image patch and a kernel, summed up:
    <div style="text-align: center; margin: 10px 0;">\\( S(i,j) = (I * K)(i,j) = \\sum_{m} \\sum_{n} I(i-m, j-n) K(m,n) \\)</div>
  </li>
  <li><strong>Output Feature Map Size:</strong>
    <div style="text-align: center; margin: 10px 0;">\\( O = \\lfloor \\frac{W - F + 2P}{S} \\rfloor + 1 \\)</div>
    where \\( W \\) is input width, \\( F \\) is kernel size, \\( P \\) is padding, and \\( S \\) is stride.
  </li>
  <li><strong>Pooling:</strong> Downsamples feature maps (e.g. Max Pooling takes the maximum value in a window) to achieve spatial translation invariance.</li>
</ul>`,
    code: `import torch
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        # Input channel: 3 (RGB), Output channel: 16, Kernel: 3x3, Padding: 1
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        # Assuming input image size is 32x32:
        # After conv1: 32x32x16
        # After pool: 16x16x16
        self.fc = nn.Linear(16 * 16 * 16, 10) # 10 classes output
        
    def forward(self, x):
        x = self.pool(torch.relu(self.conv1(x)))
        x = x.view(x.size(0), -1) # Flatten tensor
        x = self.fc(x)
        return x

model = SimpleCNN()
input_image = torch.randn(4, 3, 32, 32) # Batch size: 4
output = model(input_image)
print("CNN Output Tensor Shape:", output.shape)`,
    resources: [
      { name: "CS231n: Convolutional Neural Networks for Visual Recognition - Stanford", url: "http://cs231n.stanford.edu/", type: "Course" },
      { name: "CNN Explainer (Interactive Web Tool)", url: "https://poloclub.github.io/cnn-explainer/", type: "Interactive Tool" },
      { name: "PyTorch Image Classification Tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html", type: "Documentation" }
    ]
  },
  {
    id: "sequence-models",
    phase: 4,
    phaseTitle: "Phase 4: Deep Learning & Neural Networks",
    title: "Sequence Models (RNNs & LSTMs)",
    difficulty: "Advanced",
    subtitle: "Handling sequential and time-series data using Recurrent Neural Networks.",
    concept: "Traditional neural networks assume inputs are independent. Recurrent Neural Networks (RNNs) process sequential input by maintaining hidden states representing memory of past steps. Standard RNNs suffer from vanishing gradients over long sequences, which Long Short-Term Memory (LSTM) cells solve using gating mechanisms.",
    math: `<h4>LSTM Cell Gates:</h4>
An LSTM cell controls memory flow through three gates (using sigmoid function \\( \\sigma \\)):
<ul>
  <li><strong>Forget Gate:</strong> Controls how much history to discard: \\( f_t = \\sigma(W_f \\cdot [h_{t-1}, x_t] + b_f) \\)</li>
  <li><strong>Input Gate:</strong> Controls what new information to store: \\( i_t = \\sigma(W_i \\cdot [h_{t-1}, x_t] + b_i) \\)</li>
  <li><strong>Output Gate:</strong> Controls what part of memory output to produce: \\( o_t = \\sigma(W_o \\cdot [h_{t-1}, x_t] + b_o) \\)</li>
  <li><strong>Cell State (Long-term memory):</strong> Updated via: \\( C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t \\)</li>
</ul>`,
    code: `import torch
import torch.nn as nn

class LSTMClassifier(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim):
        super(LSTMClassifier, self).__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.lstm = nn.LSTM(embedding_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, output_dim)
        
    def forward(self, text):
        # text size: [batch_size, sequence_length]
        embedded = self.embedding(text) # size: [batch_size, seq_len, embed_dim]
        lstm_out, (hidden, cell) = self.lstm(embedded)
        # Take the hidden state of the last time step
        last_hidden = hidden[-1, :, :]
        return self.fc(last_hidden)

model = LSTMClassifier(vocab_size=100, embedding_dim=16, hidden_dim=8, output_dim=2)
dummy_seq = torch.randint(0, 100, (4, 10)) # Batch of 4 sentences, 10 words each
output = model(dummy_seq)
print("LSTM Output Shape:", output.shape)`,
    resources: [
      { name: "Understanding LSTMs - Colah's Blog", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", type: "Article" },
      { name: "CS224n: Natural Language Processing with Deep Learning - Stanford", url: "web.stanford.edu/class/cs224n/", type: "Course" },
      { name: "PyTorch Sequence Modeling Tutorial", url: "https://pytorch.org/tutorials/beginner/nlp/sequence_models_tutorial.html", type: "Documentation" }
    ]
  },

  // PHASE 5
  {
    id: "transformers",
    phase: 5,
    phaseTitle: "Phase 5: Advanced & Generative AI",
    title: "Transformers & Self-Attention",
    difficulty: "Advanced",
    subtitle: "The architecture behind modern LLMs (BERT, GPT) using Attention mechanisms.",
    concept: "The Transformer architecture replaced RNNs as the standard model for sequence tasks. It allows for complete parallelization during training by replacing recurrence with self-attention, which calculates relationships between all words in a sequence simultaneously, regardless of distance.",
    math: `<h4>Self-Attention Mechanism:</h4>
An input sequence is projected into Queries (\\( Q \\)), Keys (\\( K \\)), and Values (\\( V \\)) matrices using learned weight matrices.
<ul>
  <li><strong>Scaled Dot-Product Attention:</strong> Measures word similarities:
    <div style="text-align: center; margin: 10px 0;">\\( Attention(Q, K, V) = Softmax\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V \\)</div>
    where \\( d_k \\) is the scaling dimension (dimension of key vectors) that prevents gradients from vanishing during softmax.
  </li>
  <li><strong>Multi-Head Attention:</strong> Runs attention multiple times in parallel, allowing the model to focus on different information subspaces simultaneously.</li>
</ul>`,
    code: `import torch
import torch.nn as nn

# Native PyTorch MultiheadAttention
embed_dim = 64
num_heads = 4

# Initialize attention module
multihead_attn = nn.MultiheadAttention(embed_dim, num_heads, batch_first=True)

# Create dummy sequence data
# Shape: [batch_size, sequence_length, embedding_dimension]
query = torch.randn(2, 10, embed_dim)
key = torch.randn(2, 10, embed_dim)
value = torch.randn(2, 10, embed_dim)

# Calculate Attention Output
attn_output, attn_weights = multihead_attn(query, key, value)
print("Attention Output Shape:", attn_output.shape)
print("Attention Weights Shape (relationships matrix):", attn_weights.shape)`,
    resources: [
      { name: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762", type: "Paper" },
      { name: "The Illustrated Transformer - Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", type: "Interactive Guide" },
      { name: "Let's build GPT: from scratch, in code - Andrej Karpathy", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", type: "Video Tutorial" }
    ]
  },
  {
    id: "llms-rag",
    phase: 5,
    phaseTitle: "Phase 5: Advanced & Generative AI",
    title: "Large Language Models & RAG",
    difficulty: "Advanced",
    subtitle: "Fine-tuning models using LoRA and building Retrieval-Augmented Generation.",
    concept: "Pre-trained Large Language Models (LLMs) can be customized. LoRA (Low-Rank Adaptation) freezes foundation weights and injects small trainable rank decomposition matrices, saving compute resources. Retrieval-Augmented Generation (RAG) retrieves external vector database documents to ground LLM answers, preventing hallucinations.",
    math: `<h4>LoRA Math:</h4>
Instead of modifying weight matrix \\( W_0 \\) (size \\( d \\times k \\)) during training, we update weights with decomposed delta:
<div style="text-align: center; margin: 10px 0;">\\( W = W_0 + \\Delta W = W_0 + B \\cdot A \\)</div>
where \\( B \\) has size \\( d \\times r \\), \\( A \\) has size \\( r \\times k \\), and rank \\( r \\ll \\min(d, k) \\). This drastically reduces parameter count.`,
    code: `# Conceptual mock code for LoRA and RAG setups
# Using HuggingFace transformers + LangChain / LlamaIndex

# 1. PEFT (LoRA) Setup
# pip install peft transformers
"""
from transformers import AutoModelForCausalLM
from peft import LoraConfig, get_peft_model

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
lora_config = LoraConfig(
    r=8, 
    lora_alpha=32, 
    target_modules=["q_proj", "v_proj"], 
    lora_dropout=0.05, 
    bias="none"
)
peft_model = get_peft_model(model, lora_config)
peft_model.print_trainable_parameters()
"""

# 2. Simple Vector Database RAG Concept
import numpy as np

def cosine_similarity(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

# Imagine we have embeddings of documents
documents = ["Vector databases are fast.", "Neural networks extract features."]
doc_embeddings = [np.array([1, 0]), np.array([0, 1])]

# User Query
query_emb = np.array([0.9, 0.1])
scores = [cosine_similarity(query_emb, doc_emb) for doc_emb in doc_embeddings]
best_doc_idx = np.argmax(scores)
print("Most relevant document retrieved for RAG:", documents[best_doc_idx])`,
    resources: [
      { name: "Hugging Face PEFT Guide", url: "https://huggingface.co/docs/peft/index", type: "Documentation" },
      { name: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", type: "Documentation" },
      { name: "LoRA: Low-Rank Adaptation of Large Language Models (Paper)", url: "https://arxiv.org/abs/2106.09685", type: "Paper" }
    ]
  },
  {
    id: "generative-models",
    phase: 5,
    phaseTitle: "Phase 5: Advanced & Generative AI",
    title: "Generative Models (GANs & Diffusion)",
    difficulty: "Advanced",
    subtitle: "Creating new synthetic images/data using GANs and Diffusion models.",
    concept: "Generative models learn data probability distributions to synthesize new data samples. GANs set up a game between a Generator (synthesizing fake samples) and a Discriminator (classifying real vs fake). Diffusion models gradually add noise to images and then learn to reverse the process to generate data from scratch.",
    math: `<h4>Generative Objectives:</h4>
<ul>
  <li><strong>Generative Adversarial Network (GAN) minimax objective:</strong>
    <div style="text-align: center; margin: 10px 0;">\\( \\min_{G} \\max_{D} V(D, G) = E_{x \\sim p_{data}}[\\log D(x)] + E_{z \\sim p_{z}}[\\log(1 - D(G(z)))] \\)</div>
  </li>
  <li><strong>Diffusion Models:</strong> Define a forward noising process \\( q(x_t | x_{t-1}) \\) and train a neural network to predict the reverse denoising transition \\( p_\\theta(x_{t-1} | x_t) \\) to generate data step-by-step from Gaussian noise.</li>
</ul>`,
    code: `import torch
import torch.nn as nn

# Simple Discriminator/Generator Block for a GAN
class Generator(nn.Module):
    def __init__(self, latent_dim, img_dim):
        super(Generator, self).__init__()
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 128),
            nn.ReLU(),
            nn.Linear(128, img_dim),
            nn.Tanh() # Scale output pixels between -1 and 1
        )
    def forward(self, z):
        return self.net(z)

class Discriminator(nn.Module):
    def __init__(self, img_dim):
        super(Discriminator, self).__init__()
        self.net = nn.Sequential(
            nn.Linear(img_dim, 128),
            nn.ReLU(),
            nn.Linear(128, 1),
            nn.Sigmoid() # Classify probability of being real
        )
    def forward(self, x):
        return self.net(x)

# Instantiate networks
gen = Generator(latent_dim=10, img_dim=64)
disc = Discriminator(img_dim=64)
latent_noise = torch.randn(4, 10)
fake_imgs = gen(latent_noise)
predictions = disc(fake_imgs)
print("Synthesized Fake Images Shape:", fake_imgs.shape)
print("Discriminator Confidence Scores:", predictions.squeeze().detach().numpy())`,
    resources: [
      { name: "Generative Adversarial Networks (Paper by Ian Goodfellow)", url: "https://arxiv.org/abs/1406.2661", type: "Paper" },
      { name: "What are Diffusion Models? - Lilian Weng (OpenAI)", url: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/", type: "Article" },
      { name: "Huggin Face Diffusion Models Course", url: "https://github.com/huggingface/diffusion-models-class", type: "Course" }
    ]
  },

  // PHASE 6
  {
    id: "apis-serving",
    phase: 6,
    phaseTitle: "Phase 6: MLOps & Production",
    title: "Model Serving & APIs",
    difficulty: "Intermediate",
    subtitle: "Wrapping trained model weights inside FastAPI endpoints.",
    concept: "To make models useful in production, we wrap them in web API endpoints (e.g. REST APIs) using frameworks like FastAPI. Other systems can query the endpoint by sending payload data and receiving predictions in JSON format in real time.",
    math: `<h4>API Architecture:</h4>
<ul>
  <li><strong>Request/Response Cycle:</strong> Client sends JSON payload \\( \\rightarrow \\) API parses payload \\( \\rightarrow \\) model computes inference \\( \\rightarrow \\) API formats outputs \\( \\rightarrow \\) client receives response.</li>
  <li><strong>Serialisation:</strong> Saving models from memory to disk (using <code>pickle</code> or <code>joblib</code>) and reloading them on startup.</li>
</ul>`,
    code: `from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

# Define app
app = FastAPI(title="ML Prediction Service")

# Mock Model Class
class MockModel:
    def predict(self, features):
        # returns linear combination as predictions
        return float(np.sum(features) * 1.5)

model = MockModel()

# Define input schema
class InferenceRequest(BaseModel):
    features: list[float]

# Prediction endpoint
@app.post("/predict")
def predict(request: InferenceRequest):
    pred = model.predict(request.features)
    return {"prediction": pred}

# Run with command: uvicorn filename:app --reload
print("FastAPI code ready to wrap models. Endpoint is defined at /predict.")`,
    resources: [
      { name: "FastAPI Official Documentation", url: "https://fastapi.tiangolo.com/", type: "Documentation" },
      { name: "Serving Machine Learning Models with FastAPI", url: "https://towardsdatascience.com/serving-machine-learning-models-with-fastapi-377cef05043a", type: "Article" }
    ]
  },
  {
    id: "docker-containerization",
    phase: 6,
    phaseTitle: "Phase 6: MLOps & Production",
    title: "Docker & Containerization",
    difficulty: "Intermediate",
    subtitle: "Packaging application code, dependencies, and OS environments.",
    concept: "Deploying Python code often hits dependency version conflicts. Docker packages the code, libraries, and OS environment into self-contained 'images'. This guarantees that the ML service runs identically in local environments, testing servers, and cloud clusters.",
    math: `<h4>Docker Terms:</h4>
<ul>
  <li><strong>Dockerfile:</strong> Text document containing commands to assemble the container image.</li>
  <li><strong>Image:</strong> A read-only template with instructions for creating a Docker container.</li>
  <li><strong>Container:</strong> A runnable, isolated instance of an image.</li>
</ul>`,
    code: `# The following is a Dockerfile configuration
"""
# 1. Use official lightweight Python parent image
FROM python:3.10-slim

# 2. Set working directory in container
WORKDIR /app

# 3. Copy dependencies list and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy API application code
COPY . .

# 5. Expose FastAPI default port
EXPOSE 8000

# 6. Run FastAPI server using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
"""

# Shell Commands to run:
# docker build -t ml-api-service .
# docker run -d -p 8000:8000 ml-api-service`,
    resources: [
      { name: "Docker Curriculum (For Beginners)", url: "https://docker-curriculum.com/", type: "Interactive Guide" },
      { name: "Dockerizing FastAPI Applications", url: "https://testdriven.io/blog/fastapi-docker/", type: "Article" }
    ]
  },
  {
    id: "monitoring-tracking",
    phase: 6,
    phaseTitle: "Phase 6: MLOps & Production",
    title: "Monitoring & Experiment Tracking",
    difficulty: "Advanced",
    subtitle: "Logging metrics with MLflow and tracking training drift.",
    concept: "ML models degrade over time as real-world data distributions change (data drift). In development, experiment trackers (MLflow, Weights & Biases) log hyperparameters and performance metrics. In production, monitoring systems track data drift to trigger automatic model retraining.",
    math: `<h4>Drift Detection Metric:</h4>
<ul>
  <li><strong>Kullback-Leibler (KL) Divergence:</strong> Measures difference between baseline distribution \\( P(x) \\) and live distribution \\( Q(x) \\):
    <div style="text-align: center; margin: 10px 0;">\\( D_{KL}(P || Q) = \\sum_{x \\in X} P(x) \\log\\left(\\frac{P(x)}{Q(x)}\\right) \\)</div>
  </li>
  <li>If \\( D_{KL} \\) exceeds a threshold, it indicates significant data drift, necessitating model update.</li>
</ul>`,
    code: `# Mocking MLflow Experiment Tracking
# pip install mlflow
import time

"""
import mlflow

# Start experiment run
mlflow.set_experiment("Regression_Suite")

with mlflow.start_run():
    # Log parameters (hyperparameters)
    mlflow.log_param("alpha", 0.1)
    mlflow.log_param("optimizer", "Lasso")
    
    # Train model (mock)
    r2_score = 0.895
    mse = 1.2
    
    # Log metrics
    mlflow.log_metric("R2", r2_score)
    mlflow.log_metric("MSE", mse)
    
    print("MLflow logging completed.")
"""

# Simple Data Drift simulation using KL-divergence
import scipy.stats

baseline_data = [0.1, 0.4, 0.5]
live_data = [0.12, 0.38, 0.50]

kl_div = scipy.stats.entropy(baseline_data, live_data)
print(f"KL Divergence: {kl_div:.6f}")
if kl_div > 0.05:
    print("WARNING: Data drift detected! Triggering retraining.")
else:
    print("Data distribution is stable.")`,
    resources: [
      { name: "MLflow Documentation Guide", url: "https://mlflow.org/docs/latest/index.html", type: "Documentation" },
      { name: "Introduction to Machine Learning Monitoring (Drift)", url: "https://evidentlyai.com/blog/machine-learning-monitoring-data-drift", type: "Article" },
      { name: "Weights & Biases Guide", url: "https://docs.wandb.ai/", type: "Documentation" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = roadmapData;
}
