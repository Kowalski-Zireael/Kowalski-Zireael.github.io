*11612733 杜子豪*

* **9.B——**

* 1.

  Since $S$ is over real vector space and is an isometry

  With respect to some basis, the matrix can be
  $$
  \begin{bmatrix}
  	\pm1 & 0 & 0 \\
  	0 & \cos\theta & -\sin\theta \\
  	0 & \sin\theta & \cos\theta
  \end{bmatrix}or\begin{bmatrix}
  	\cos\theta & -\sin\theta & 0 \\
  	\sin\theta & \cos\theta & 0 \\
  	0 & 0 & \pm1 \\
  \end{bmatrix}
  $$
  Thus the matrix of $S^2$ have a 1 on the diagonal, which implies that 1 is the eigenvalue

  Hence $\exist x\in\R^3$ s.t. $S^2x=x$

  

* 2.

  Since every isometry (denoted $S$) on a odd-dimensional real inner product space have the matrix of the form
  $$
  \begin{bmatrix}
  	A_1 & \\
  	 	& \ddots & \\
  	 	&        & A_m
  \end{bmatrix}
  $$
  with respect to some basis and where each $A_i$ is $2\times2$ matrix with form
  $$
  \begin{bmatrix}
  	\cos\theta & -\sin\theta \\
  	\sin\theta & \cos\theta
  \end{bmatrix}
  $$
  or is $1\times1$ matrix with 1 or -1

  Thus, an odd-dimensional must have some blocks $A_j$ s.t. $A_j$ is $1\times1$ matrix form

  Which implies that for the $j-th$ vector of the above basis, denoted $e_j$ and $Se_j=\pm e_j$

  

* 6.

  Suppose that with respect to the standard basis, the matrix of $T$ is
  $$
  \begin{bmatrix}
  	1 & 0 \\
  	1 & 1 \\
  \end{bmatrix}
  $$
  Thus $T(x,y)=(x,x+y)$

  $\forall x\in span((0,1))$, $Tx\in span((0,1))$ however $T(1,0)=(1,1)\notin span((1,0))$

  

* 7.

  $\mathcal{M}(T_1\cdots T_m)=\mathcal{M}(T)$

  Hence $T=T_1\cdots T_m$

  

* **10.A——**

* 1.

  $T$ is invertible $\Leftrightarrow\exist S\in\mathcal{L}(V)$ s.t. $ST=TS=I$

  $\Leftrightarrow \mathcal{M}(S,(v_1,...,v_n))\mathcal{M}(T,(v_1,...,v_n))=\mathcal{M}(ST,(v_1,...,v_n))=\mathcal{M}(I,(v_1,...,v_n))$

  $=\mathcal{M}(T,(v_1,...,v_n))\mathcal{M}(S,(v_1,...,v_n))$

  $\Leftrightarrow \mathcal{M}(T,(v_1,...,v_n))$ is invertible

  

* 4.

  $\mathcal{M}(T,(v_1,...,v_n))=\mathcal{M}(I,(u_1,...,u_n),(v_1,...,v_n))\mathcal{M}(T,(v_1,...,v_n),(u_1,...,u_n))$

  $=\mathcal{M}(I,(u_1,...u_n),(v_1,...,v_n))I=\mathcal{M}(I,(u_1,...u_n),(v_1,...,v_n))$

  

* 6.

  With respect to the standard basis of $\R^2$

  Let the matrix of $T$ be
  $$
  \begin{bmatrix}
  	0 & 1 \\
  	-1 & 0
  \end{bmatrix}
  $$
  Thus $T^2$ is
  $$
  \begin{bmatrix}
  	-1 & 0 \\
  	0 & -1 \\
  \end{bmatrix}
  $$
  Hence $trace\,T^2<0$

  

* 8.

  Extend $\frac{v}{\|v\|}$ to a orthonoramal basis of $V$ as $e_1\doteq\frac{v}{\|v\|},e_2,...,e_n$

  Thus $Te_1=T_{1,1}e_1+\cdots+T_{n,1}e_n$

  It follows that $T_{1,1}=\langle Te_1,e_1\rangle$

  Thus $trace\,T=T_{1,1}+\cdots+T_{n,n}=\langle Te_1,e_1\rangle+\cdots+\langle Te_n,e_n\rangle$

  which is $\langle w,v\rangle$

  

* 9.

  Suppose $v_1,...,v_n$ is a basis of $range\,T$, $u_1,...,u_m$ is a basis of $null\,T$

  Thus $v_1,...,v_n,u_1,...,u_m$ is a basis of $V$

  $Pu_i=0$ for all $i=1,...,m$

  Suppose $Pv=v_i$, we get $Pv=P^2v=P(Pv)=Pv_i=v_i$

  Thus $Pv_i=v_i$ for all $i=1,...,n$

   Hence $trace\,T=n=\dim range\,T$

  

* 11.

  Since $T$ is positive, it is self-adjoint and its eigenvalues are nonnegative

  Thus with respect to some orthonormal basis, the matrix of $T$ is diagonal matrix

  We denote such matrix $A$

  Since $trace\,T=0$, $trace\,A=0$ and $A$ have only nonnegative entries on the diagonal

  we get $A=0$, which is $T=0$

  

* 17.

  Suppose $T\not=0$, that is $\exist v\in V$ s.t. $Tv\not=0$

  Thus extend it to a basis of $V$ as $v_1\doteq Tv,v_2,...,v_n$

  Define $Sv_1=v,Sv_j=0$ for all $j=2,...,n$

  Thus $TSv_1=Tv=v_1,TSv_j=T0=0$ for all $j=2,...,n$

  It follows that $trace\,TS=1=trace\,ST$

  Hence $T=0$

  

* 18.

  Let $S=T^*T$, and suppose $e_1,...,e_n$ is an orthonormal basis of $V$

  $Se_1=S_{1,1}e_1+\cdots+S_{n,1}e_n$ thus $S_{1,1}=\langle Se_1,e_1\rangle$

  Similarly $S_{i,i}=\langle Se_i,e_i\rangle$ for all $i=1,...,n$

  Thus $trace \,T^*T=trace\,S=\langle T^*Te_1,e_1\rangle+\cdots+\langle T^*Te_n,e_n\rangle=\langle Te_1,Te_1\rangle+\cdots+\langle Te_n,e_n\rangle$

  which is $\|Te_1\|^2+\cdots+\|Te_n\|^2$

  

* 20.

  Suppose such orthonormal basis is $e_1,...,e_n$
  
  $\sum\sum|A_{j,k}|^2=trace \,\mathcal{M}(T,(e_1,...e_n))\mathcal{M}(T^*,(e_1,...e_n))=trace\,T^*T$
  
  Since $T$ has an block diagonal matrix, with each block being upper-triangular matrix with the size of eigenvalue’s multiplicity square and eigenvalue on the diagonal with reapect to some basis consisting of generalized eigenvalues
  
  Thus $T^*$ is the hermite matrix with such basis
  
  It follows that $trace\,T^*T\geq|\lambda_1|^2+\cdots+|\lambda_n|^2$