# Ordinary Differential Equation

## Catalog 

[TOC]

## Syllabus

* `11849147@mail.sustc.edu.cn`



## Chapter 1

### 1.2 Solutions of Some Differential Equations

**General Form——**

* To solve
  $$
    \frac{\mathrm{d}y}{\mathrm{d}t}=ay-b \tag{1} 
	\Rightarrow\frac{\mathrm{d}y}{\mathrm{d}t}=a(y-\frac{b}{a}) 
  $$
* If $y\not=\frac{b}{a}$
  $$
    \frac{\mathrm{d}y/\mathrm{d}t}{y-\frac{b}{a}}=a \\
    \Rightarrow\frac{\mathrm{d}}{\mathrm{d}t}\ln|y-\frac{b}{a}|=a \\
    \Rightarrow\ln|y-\frac{b}{a}|=at+C \tag{2}
  $$

* Hence
  $$
  y=\frac{b}{a}+ce^{at},\quad where\;c=\pm e^C \tag{*}
  $$

**Initial Value Problem(IVP)——**

* If for some $x_0$, we have additional condition s.t. $y(x_0)=y_0$
* By eq(*) in General Form.
  $$
    \frac{b}{a}+ce^{ax_0}=y_0 \\
    \Rightarrow c=\frac{y_0-b/a}{e^{ax_0}}\tag{1}
  $$

### 1.3 Classification of Differential Equations

**Ordinary and Partial Differential Equation——**

* One important classification is based on whether the unknown function depends on a single independent variable or on several independent variables.
* For example, ordinary——
  $$
    L\frac{\mathrm{d}^2Q(t)}{\mathrm{d}t^2}+R\frac{\mathrm{d}Q(t)}{\mathrm{d}t}+\frac{1}{C}Q(t)=E(t)\tag{1} 
  $$
* for the charge Q(t) on a capacitor(电容器) in a circuit with capacitance C, resistance R, and inductance(电感) L.
* For example, partial——
  $$
    \alpha^2\frac{\partial^2u(x,t)}{\partial x^2}=\frac{\partial^2u(x,t)}{\partial t}\tag{2}
  $$

**System of Differential Equation**

* More than one equation to solve 

* For example, Lotka-Volterra——
  $$
  \mathrm{d}x/\mathrm{d}t=ax-\alpha xy \\
  \mathrm{d}y/\mathrm{d}t=-cy+\gamma xy
  $$
  where $x(t)$ and $y(t)$ are the respective populations of the prey and predator species

**Order**

* The order of a differential equation is the order of the highest derivative that appears in the equation. More generally, the equation
  $$
  F[t,u(t),u'(t),...,u^{(n)}(t)]=0
  $$
  is an ordinary differential equation of the $n_{th}$ order

**Linear and Nonlinear Equations**

* The ordinary differential equation
  $$
  F(t,y,y',...,y^{(n)})=0
  $$
  is said to be linear if $F$ is a linear function of the variables $y,y',...,y^{(n)}$, Thus the general linear ordinary differential equation of order $n$ is
  $$
  a_0(t)y^{(n)}+a_1(t)y^{(n-1)}+\cdot\cdot\cdot+a_n(t)y=g(t)
  $$

* An example of nonlinear equation, oscillating pendulum——
  $$
  \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+\frac{g}{L}\sin\theta=0
  $$
  

## Chapter 2

### 2.1 Linear Equations; Method of Integrating Factors

**Method of Integral Fractor——**

* For the equation
  $$
  y'+p(t)y=q(t)
  $$
* Multiple $μ(t)$ on both sides, we get
  $$
    μy'+μpy=μq \tag{1} 
  $$
* If we can find a $μ>0​$, s.t.
  $$
  	(μy)'=μy'+μpy 
   	\text{i.e.}\quadμ'=μp \tag{2}
  $$
* Thus 
  $$
    μ'=\mathrm{d}\mu/\mathrm{d}t=\mu p \tag{3}
    \Rightarrow\mathrm{d}\mu/\mu=p\mathrm{d}t \\
    \Rightarrow \ln\mu=\int p\mathrm{d}t
  $$
* Hence 
  $$
  \mu=e^{\int p\mathrm{d}t}
  $$
* It follows that
  $$
  (\mu y)'=p\mu \\
  \text{i.e.}\quad y=\frac{\int p\mu\mathrm{d}t}{e^{\int p\mathrm{d}t}}\\
  $$

### 2.2 Separable Equation

* For the equation
  $$
  \frac{dy}{dx}=f(x,y)\tag{1}
  $$

* Rewrite (1), we get
  $$
  M(x,y)+N(x,y)\frac{dy}{dx}=0
  $$

* If it happens that $M$ is a function of $x$ only and $N$ is a function of $y$ only, then we get
  $$
  M(x)+N(y)\frac{dy}{dx}=0 \\
  \Rightarrow M(x)dx+N(y)dy=0
  $$



**HW——due on Week 2 Wed. In class question**
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{x^2+y^2}{xy}
$$

### 2.3 Modeling with First-Order Differential Equations

* **Eg.1 Compound Interest**
  $$
  \frac{dS}{dt}=rS+k
  $$
  

### 2.6 Exact ODEs and Integrating Factors

* **Exact ODES——**

* The ODE of form
  $$
  M(x,y)dx+N(x,y)dy=0 \\
  $$

* is exact if 

  $\exist \psi=\psi(x,y) \quad s.t.\psi_x(x,y)=M(x,y)\;\psi_y(x,y)=N(x,y)$

  $d\psi=\psi_xdx+\psi_ydy=M(x,y)dx+N(x,y)dy=0$

  $\Rightarrow\psi(x,y)=c$

  

* **Theorem 2.6.1——**

  Let the functions $M$, $N$, $M_y$ and $Nx$ be continuous in the rectangular region $R:\alpha<x<\beta,\;\gamma<y<\delta$. Then equation
  $$
  M(x,y)+N(x,y)y'=0
  $$
  is exact iff
  $$
  M_y(x,y)=N_x(x,y)
  $$



* **Integrating Factors——**

* $$
  M(x,y)dx+N(x,y)dy=0 \\
  \Rightarrow (\mu M)dx+(\mu N)dy=0 \\
  where\;\mu=\mu(x) \\
  s.t.\;(\mu M)_y=(\mu N)_x \\
  \Rightarrow\mu M_y=\mu'N+\mu N_x \\
  \frac{d\mu}{dx}=\frac{M_y-N_x}{N}\mu
  $$

* If $\frac{M_y-N_x}{N}$ is only a function of $x$, this equation will be easy to solve