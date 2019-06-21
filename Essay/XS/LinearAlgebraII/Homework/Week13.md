*11612733 杜子豪*

* **8.C——**

* 2.

  Since $T$ has only eigenvalues 5 and 6, we get $0<\dim G(5,T),\dim G(6,T)<n$

  Thus suppose $q(z)$ is the characterristic polynomial of $T$

  $q(T)=(T-5I)^{a}(T-6I)^b=0$ and  $a,b<n$

  Hence $(T)=(T-5I)^{n-1}(T-6I)^{n-1}=q(T)(T-5I)^{n-1-a}(T-6I)^{n-1-b}=0$

  

* 3.

  With respect to the standard basis, the matrix of $T$ is 
  $$
  \begin{bmatrix}
  	7 & 0 & 0 & 0 \\
  	0 & 7 & 0 & 0 \\
  	0 & 0 & 8 & 0 \\
  	0 & 0 & 0 & 8 \\
  \end{bmatrix}
  $$
  
* 4.

  With respect to the standard basis, the matrix of $T$ is 
  $$
  \begin{bmatrix}
  	1 & 0 & 0 & 0 \\
  	0 & 5 & 1 & 0 \\
  	0 & 0 & 5 & 0 \\
  	0 & 0 & 0 & 5 \\
  \end{bmatrix}
  $$
  
* 6.

  With respect to the standard basis, the matrix of $T$ is 
  $$
  \begin{bmatrix}
  	0 & 0 & 0 & 0 \\
  	0 & 1 & 0 & 0 \\
  	0 & 0 & 1 & 0 \\
  	0 & 0 & 0 & 3 \\
  \end{bmatrix}
  $$
  
* 8.

  $T$ is invertible $\Leftrightarrow$ $0$ is not an eigenvalue of $T$ $\Leftrightarrow$ $p(0)\not=0$ $\Leftrightarrow$ the constant of $p$ is nonzero

  

* 10.

  Suppose $\lambda_1,...,\lambda_m$ are distinct eigenvalues of $T$, thus $\frac1{\lambda_1},…,\frac1{\lambda_m}$ are of $T^{-1}$

  $q(z)=(z-\frac1{\lambda_1})^{a_1}\cdots(z-\frac1{\lambda_m})^{a_m}=z^{\dim V}(1-\frac1{z\lambda_1})^{a_1}\cdots(1-\frac1{z\lambda_m})^{a_m}$

  $=z^{\dim V}(-\frac1{\lambda_1})\cdots(-\frac1{\lambda_m})(\frac1z-\lambda_1)\cdots(\frac1z-\lambda_m)=\frac1{p(0)}z^{\dim V}p(\frac1z)$

  

* 12.

  Suppose $\lambda_1,...,\lambda_m$ are distinct eigenvalues of $T$

  If $V$ has a basis consisting of eigenvectors of T, $(T-\lambda_1I)\cdots(T-\lambda_mI)v=0$ for all $v\in V$

  Thus $(T-\lambda_1I)\cdots(T-\lambda_mI)=0$ which implies the minimal polynomial has no repeated zeros

  On the contrary, If the minimal polynomial has no repeated zeros

  Suppose for each generalized eigenvectors $v_i$, the corresponding eigenvalues is $\lambda_j$

  $(T-\lambda_1I)\cdots(T-\lambda_mI)v_i=0$

  Since $G(\lambda_j,T)$ is invariant under any polynomial of $T$

  $(T-\lambda_1I)\cdots(T-\lambda_{j-1}I)(T-\lambda_{j+1}I)\cdots(T-\lambda_mI)v_i\not=0$

  Hence $(T-\lambda_jI)v_i=0$

  It follows that such basis consisting of genralized eigenvectors is actually a basis consisting of eigenvertors

  

* 14.

  Since $S$ is an isometry, there is an orthonormal basis of $V$ consisting of eigenvectors of $S$ whose corresponding rigenvalues all have absolute value 1

  Thus with respect to this basis, the matrix of $S$ is diagonal matrix with all entries being 1 or -1

  Hence $p(0)=c=(0-1)^{\dim V-x}(0+1)^x$ which has absolute value 1

  

  

* 18.

  $Te_1=e_2,Te_2=e_3,...,Te_{n-1}=e_n,Te_n=-(a_0e_1+\cdots+a_{n-1}e_n)$

  $T^ne_1=Te_n=-(a_0e_1+a_1Te_1+\cdots+a_{n-1}T^{n-1}e_1)$

  Thus $T^ne_1+a_{n-1}T^{n-1}e_1+\cdots+a_0e_1=0$, and we donote it as $p(T)e_1$

  $T^ne_2=T^{n+1}e_1=T^nTe_1+a_{n-1}T^{n-1}Te_1+\cdots+a_0e_1=0=p(T)Te_1=p(T)e_2$

  Similarly, $p(T)e_i=0$ for $i=1,...,n$

  Thus $p(T)=0$ 

  

* **8.D——**

* 2.

  The characterristic polynomial is $z^6$ and the minimal polynomial is $z^3$

  

* 5.

  The matrix of $T^2$ is 
  $$
  \begin{bmatrix}
  	A_1 &  \\
          & \ddots \\
  	    &         & A_m
  \end{bmatrix}
  $$
  where each $A_i$ is 
  $$
  \begin{bmatrix}
  	\lambda_i^2 & 2\lambda_i &         \\
                  & \ddots     & \ddots &   \\
                  &            & \ddots & 2\lambda_i \\
                  &            &        &\lambda_i^2
                  
  \end{bmatrix}
  $$
  
* **9.A——**

* 2.

  Suppose $u_1,u_2,v_1,v_2\in V,a,b\in\R$, thus $u_1+iv_1,u_2+iv_2\in V_\C,a+ib\in\C$

  $T_\C(u_1+iv_1+u_2+iv_2)=T(u_1+u_2)+iT(v_1+v_2)=Tu_1+iTv_1+Tu_2+iTv_2$

  $=T_\C(u_1+iv_1)+T_\C(u_2+iv_2)$

  $T_\C[(a+ib)(u_1+iv_1)]=T_\C(au_1-bv_1+iav_1+ibu_1)=T(au_1-bv_1)+iT(av_1+bu_1)$

  $=aTu_1-bTv_1+iaTv_1+ibTu_1=(a+ib)(Tu_1+iTv_1)=(a+ib)T_\C(u_1,v_1)$

  Hence $T_\C$ is a linear map

  

* 6.

  If $T$ is invertible,

  ​	suppose $u,v\in V$, $T_\C(u,v)=0$ implies $Tu=Tv=0$ implies $u=v=0$

  ​	Thus $T_\C$ is injective and so invertible

  If $T_\C$ is invertible,

  ​	$\forall v\in V$, $\exist u,w\in V$ s.t. $u+iw\in V_\C$ and $T_\C(u+iw)=v$

  ​	Thus $Tu=v$, $T$ is surjective and so invertible	 

  

* 8.

  If $T_\C$ has nonreal eigenvalue $\lambda$, $\overline\lambda$ is also an eigenvalue of $T_\C$

  Thus $5,7,\lambda,\overline\lambda$ are eigenvalues of $T_\C$ 

  which contradicts to the $T_\C\in\mathcal{L}(\C^3)$

  Hence $T_\C$ has no nonreal eigenvalues

  

* 9.

  Suppose $S=T^2+T+I$

  Since $T\in\mathcal{L}(\R^7)$ it has at least one real eigenvalues $\lambda$

  If $S$ is nilpotent, $S^j=0$ for some j;

  Thus $(T^2+T+I)^j=0$ and the polynomial $p(z)\doteq (z^2+z+1)^j$ s.t. $p(T)=0$

  Since $S^j(u+iv)=S^ju+iS^jv=0$ $p(S_\C)=0$

  However $p$ must be a multiple of a minimal polynomial and it contains no real eigenvalues  $\lambda$

  That makes a contradiction and hence $T^2+T+I$ can never be a nilpotent

  

* 11.

  From 9, we know, suupose $S=T^2+bT+cI$, $S_\C=0$

  Thus $p(z)\doteq z^2+az+b$ must be a multiple of minimal polynomial of $T_\C$

  Thus $T$ has an eigenvalue $\Leftrightarrow$ $T_\C$ has an real eigenvalue $\Leftrightarrow$ $p$ has real zero $\Leftrightarrow b^2\geq4c$

  

* 12.

  Since $T^2+bT+cI$ is nilpotent $(T^2+bT+cI)^j=0$ for some j and $(T_\C^2+bT_\C+cI)^j=0$

  Thus $p(z)\doteq (z^2+bz+c)$ is a multiple of minimal polynomial of $T_\C$

  Since $p(z)=(z-\lambda)^j(z-\overline\lambda)^j$ where $\lambda\in\C$

  $T_\C$ has no real eigenvalues which implies that $T$ has no eigenvalues

  

* 15.

  Since $T$ has no eigenvalues, for any $U$ which is invariant under $T$, $T|_U$ also has no eigenvalues

  Thus $U$ must be a space that is odd-dimensional