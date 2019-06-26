*11612733 杜子豪*

* **7.1——**

* 1.

  Let $x_1=u,x_2=u'$, thus $u''=x_2'$

  The equation becomes $x_1'=x_2,x_2'=-2x_1-\frac12x_2$

  

* 3.

  Let $x_1=u,x_2=u',x_3=u'',x_4=u'''$, thus $u^{(4)}=x_4'$

  The equation becomes $x_1'=x_2,x_2'=x_3,x_3'=x_4,x_4'=x_1$

  

* 5.

  Let $x_1=u,x_2=u'$, thus $u''=x_2'$

  The equation becomes $x_1'=x_2,x_2'=g(t)-p(t)x_2-q(t)x_1,x_1(0)=u_0,x_2(0)=u_0'$

  

* 6.

  * a.

    The equation can be transformed into $x_2'+2x_2=x_1$

    Hence $(e^{2t}x_2)'=e^{2t}x_1$, we get $x_2=\frac{\int e^{2t}x_1(t)dt}{e^{2t}}$

  * b.

    Substitute (a) into the first-order differential euqation

    We get $e^{2t}x_1'=-2e^{2t}x_1+\int e^{2t}x_1(t)dt$

    Thus $2e^{2t}x_1'+e^{2t}x_1''+2e^{2t}x_1'+4e^{2t}x_1=e^{2t}x_1$

    which is $x_1''+4x_1'+3x_1=0$

  * c.

    $r^2+4r+3=0$ hence $r_1=-1,r_2=-3$

    it follows that $x_1=c_1e^{-t}+c_2e^{-3t}$ where $c_1,c_2$ are arbitrary constant

  * d.

    $x_2=\frac{\int(c_1e^t+c_2e^{-t}dt)}{e^{2t}}=c_1e^{-t}-c_2e^{-3t}+c_3e^{-2t}$

    Since $x_1'+2x_1=c_1e^{-t}-c_2e^{-3t}$

    $x_2=c_1e^{-t}-c_2e^{-3t}$

  

* 8.

  * a.

    Solving $x_2'=-2x_1$ we get $x_2=-2\int x_1(t)dt$

    Substitue this into the equation of $x_1$ 

    We get $x_1'=-4\int x_1(t)dt$, which is $x_1''+4x_1=0$

  * b.

    $r^2+4=0$ hence $r_1=2i,r_2=-2i$

    It follows that $x_1=c_1\cos2t+c_2\sin2t$

    Since $x_1(0)=3,c_1=3$, thus $x_1=3\cos2t+c_2\sin2t$

    $x_2=-2\int (3\cos2t+c_2\sin2t)dt=-3\sin2t+c_2\cos2t+c_3$

    Since $x_1'=-6\sin2t+2c_2\cos2t=2x_2$

    Thus $x_2=c_2\cos2t-3\sin2t$

    Since $x_2(0)=4,c_2=4$

    Hence $x_1=3\cos2t+4\sin2t,x_2=4\cos2t-3\sin2t$

  * c.

    ![](D:\kowalski\SUSTech\OrdinaryDifferentialEquation\Homework\Week11\Week11.png)

    

* **7.2——**

* 8.

  $\det=1\times3+2\times4\not=0$

  Hence the inverse is
  $$
  \frac{1}{11}
  \begin{bmatrix} 
  	3 & -4 \\ 
  	2 & 1  \\
  \end{bmatrix}
  $$
  
* 10.

  $\det=1\times(24-25)-2\times(12-15)+3\times(10-12)=-1+6-6\not=1$

  Hence the inverse is
  $$
  \begin{bmatrix}
  	1 & -3 & 2 \\
  	-3 & 3 & -1 \\
  	2 & -1 & 0 \\
  \end{bmatrix}
  $$

  

* 16.

  * a.
    $$
    A+3B=\begin{bmatrix}
    		7e^t & 5e^{-t} & 10e^{2t} \\
    		-e^t & 7e^{-t} & 2e^{2t} \\
    		8e^t & 0 & -e^{2t} \\
    	 \end{bmatrix}
    $$
    

  * b.
    $$
    AB= \begin{bmatrix}
    		2e^{2t}+3e^{3t}-2 & -e^t+4e^{-2t}+1 & 2e^t+3e^{3t}-e^{4t} \\
    		4e^{2t}-3e^{2t}-1 & e^t+2e^{-2t}+2  & e^t+6e^{2t+e^{4t}}  \\
    		-2r^{2t}+6e^{3t}-3& -2e^t+6e^{-2t}-1& 3e^t-3e^{3t}-2e^{4t}\\
    	\end{bmatrix}
    $$
    

  * c.
    $$
    \frac{dA}{dt}=\begin{bmatrix}
    	e^t & -2e^{-t} & 2e^{2t} \\
        2e^t & -e^{-t} & -2e^{2t} \\
        -e^t & -3e^{-t} & 4e^{2t} \\
    \end{bmatrix}
    $$
    

  * d.
    $$
    \int_{0}^{1}A(t)dt=(e-1)\begin{bmatrix}
    	1 & 2e^{-1} & (e+1)/2 \\
    	2 & e^{-1} & -(e+1)/2 \\
    	-1 & -3e^{-1} & (e+1) \\
    \end{bmatrix}
    $$
    

* 19.
  $$
  \Psi'=\begin{bmatrix}
  	-3e^{-3t} & 2e^{2t} \\
  	12e^{-3t} & 2e^{2t} \\
  \end{bmatrix},\begin{bmatrix}
  	1 & 1 \\
  	4 & -2\\
  \end{bmatrix}\Psi=\begin{bmatrix}
  	-3e^{-3t} & 2e^{2t} \\
  	12e^{-3t} & 2e^{2t} \\
  \end{bmatrix}
  $$
  

* **7.3——**

* 14.

  $(5-\lambda)(1-\lambda)+3=0$, thus $\lambda_1=2,\lambda_2=4$

  $(A-2I)\vec x=0$, thus $3x_1-x_2=0$, which implies $\vec x_1=(1,3)^T$

  $(A-4I)\vec x=0$, thus $x_1-x_2=0$, which implies $\vec x_2=(1,1)^T$

  

* 16.

  $(-2-\lambda)^2-1=0$, thus $\lambda_1=-1,\lambda_2=-3$

  $(A+I)\vec x=0$, thus $x_1-x_2=0$, which implies $\vec x_1=(1,1)^T$

  $(A+3I)\vec x=0$, thus $x_1+x_2=0$, which impllies $\vec x_2=(1,-1)^T$

  

* 18.

  $(1-\lambda)^3+4(1-\lambda)=0$, thus $\lambda_1=1,\lambda_2=1+2i,\lambda_3=1-2i$

  $(A-I)\vec x=0$, thus $2x_1-2x_3=0;3x_1+2x_2=0$,which implies $\vec x_1=(-2,3,-2)^T$

  $(A-(1+2i)I)\vec x=0$, thus $x_1=0;2ix_2+2x_3=0$, which implies $\vec x_2=(0,i,1)^T$

  $(A+(1+2i)I)\vec x=0$, thus $x_1=0;2ix_2-2x_3=0$, which impllies $\vec x_3=(0,1,i)^T$

  

* 26.

  If A is singular, $\exist \vec x\not=\vec 0$ s.t. $A\vec x=0$

  ​	Thus such $\vec x$ is eigenvector and corresponding eigenvalue is 0

  If $0$ is eigenvalue of A

  ​	$\exist \vec x\not=0$ s.t. $A\vec x=0\vec x=0$, which implies $A$ is singular

  

* 29.

  Assume $\vec x^{(1)}$ and  $\vec x^{(2)}$ are linearly dependent

  Thus $\exist c_1,c_2$ which not all 0 s.t. $c_1\vec x^{(1)}+c_2\vec x^{(2)}=0$

  It follows that $c_1A\vec x^{(1)}+c_2A\vec x^{(2)}=c_1\lambda_1\vec x^{(1)}+c_2\lambda_2\vec x^{(2)}=0$

  Since $\lambda_1\not=\lambda_2$, we get $(\lambda_2-\lambda_1)\vec x^{(2)}=0$

  Thus either $\lambda_2-\lambda_1$ or $\vec x^{(2)}$ is $0$ which contradicts to the condition