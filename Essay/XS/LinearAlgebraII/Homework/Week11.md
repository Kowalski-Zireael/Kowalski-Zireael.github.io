*11612733 杜子豪*

* **7.C——**

* 1.

  Suppose $T\in\mathcal{L}(\R^2)$, $e_1,e_2$ is a standard basis

  Let $Te_1=e_1,Te_2=-e_2$, define $e_3=ae_1+be_2,e_4=ce_1+de_2$

  where $a,b,c,d\in\R$

  Since $e_3,e_4$ is also an orthogonal basis of $\R^2$

  We get $a^2+b^2=1,c^2+d^2=1,ac+bd=0$

  To let $\langle Te_3,e_3\rangle\geq0,\langle Te_4,e_4\rangle\geq0$ 

  We get $a^2-b^2\geq0,c^2-d^2\geq0$

  Thus solving all the equation above $a\geq\frac12,b=\sqrt{1-a^2},c=a,d=-b$

  Which obviously give at least one solution

  Hence we give a counterexample

  

* 4.

  $(T^*T)^*=T^*(T^*)^*=T^*T,(TT^*)^*=(T^*)^*T^*=TT^*$

  Hence $T^*T，TT^*$ are self-adjoint

  $\langle T^*Tv,v\rangle=\langle Tv,Tv\rangle\geq0$

  $\langle TT^*w,w\rangle=\langle T^*w,T^*w\rangle\geq0$

  Hence $T^*T,TT^*$ are positive operator

  

* 7.

  If $\langle Tv,v\rangle>0$ for all $v\in V$, suppose $T$ is not invertible 

  ​	$\exist v_0\in V$ s.t. $Tv_0=0$ thus we get $\langle Tv,v\rangle=0$ which contradicts to the assumption

  If $T$ is invertible, since $T$ is positive, $\exist S$ which is selfs.t. $S^2=T$

  ​	$S$ is an operator and if $v\not=0$ s.t. $Sv=0$ $S^2v=Tv=0$ which contradicts to the assumption

  ​	Hence $S$ is invertible $Sv\not=0$ for all $v\in V$ 

  ​	Hence $\langle Tv,v\rangle=\langle S^2v,v\rangle=\langle Sv,Sv\rangle>0$

  

* 8.

  If $\langle\cdot,\cdot\rangle_T$ is an inner product on $V$,  $\langle v,v\rangle_T=\langle Tv,v\rangle>0$ for all $v\in V,v\not=0$

  ​	Suppose $T$ is not invertible, $\exist v_0\in V$ s.t. $Tv_0=0,\langle Tv_0,v_0\rangle=0$ 

  ​	which contradicts to the assumption

  ​	$\langle v,w\rangle_T=\langle Tv,w\rangle=\overline{\langle w,v\rangle_T}=\overline{\langle Tw,v\rangle}=\langle v,Tw\rangle$

  ​	Thus $T$ is self-adjoint

  ​	Hence $T$ is invertible and positive

  If $T$ is invertible positive operator on $V$

  ​	Since $T$ is positive, $\langle v,v\rangle_T=\langle Tv,v\rangle\geq0$ and $\exist self-adjoint,invertible\;S$ s.t. $S^2=T$

  ​	$\langle v,v\rangle_T=0$ iff $\langle Tv,v\rangle=0$ iff $\langle S^2v,v\rangle=0$ iff $\langle Sv,Sv\rangle=0$ iff $Sv=0$ iff $v=0$

  ​	$\langle v_1+v_2,w\rangle_T=\langle T(v_1+v_2),w\rangle=\langle Tv_1,w\rangle+\langle Tv_2,w\rangle=\langle v_1.w\rangle_T+\langle v_2,w\rangle_T$

  ​	$\langle\lambda v,w\rangle_T=\langle\lambda Tv,w\rangle=\lambda\langle Tv,w\rangle=\lambda\langle v,w\rangle_T$

  ​	$\langle v,w\rangle_T=\langle Tv,w\rangle=\langle v,Tw\rangle=\overline{\langle Tw,v\rangle}=\overline{\langle w,v\rangle_T}$

  ​	Hence it is an inner product

  

* 10.

  If $S$ is isometry, $S^*$ is isometry too

  Thus (b),(c),(d) holds

  If $(d)$ holds (a) holds by 7.42

  

* 12.

  Suppose $e_1,...,e_4$ is an orthonormal basis of $\mathrm{F}^4$

  With respect to this basis, define the matrix of $T_1$ is a diagonal matrix with $2,2,5,7$ being the diagonal extries and $T_2$ is a giagonal matrix with $2,5,7,7,$ beging the diagonal entries

  Thus since the two matrix equals their transpose, $T_1,T_2$ are self-adjoint

  Suppose $S$ is isometry s.t. $T_1=S^*T_2S$

  Since $SS^*=I=S^*S$, $S$ is invertible, $\exist v\in V$ s.t. $Sv=e_$3

  $T_1v=S^*T_2Sv=S^*T_2e_3=7S^*e_3=7S^{-1}e_3=7v$

  Hence $v$ is eigenvector corresponding eigenvalues 7

  Similarly, let $w\in V$ s.t. $Sw=e_4$

  Since $\langle Sv,Sw\rangle=\langle v,w\rangle=\langle e_3,e_4\rangle=0$, $v,w$ are linearly independent

  And with the same step, we get $w$ is eigenvector corresponding to eigenvalues 7

  However $\dim E(T_1,7)=1$, so the maximun length of independent list is 1

  which contradicts to the independence of $v,w$

  Hence such $S$ doesn’t exist

  

* 14.

  By 7.A-21, $T$ is self-adjoint, thus $-T$ is also self-adjoint

  And since $1,\cos x,...,\cos nx,\sin x,...,\sin nx$ is a basis of $V$ 

  Also, $-T\cos nx=n^2\sin nx,-T\sin nx=n^2\sin nx,-T1=0\times1$

  Thus this basis consisting of eigenvectors of $-T$ and is corresponding to nonnegative eigenvalues

  Hence $-T$ is positive

  

* **7.D——**

* 1.

  $\langle Tv,w\rangle=\langle\langle v,u\rangle x,w\rangle=\langle v,u\rangle\langle x,w\rangle=\langle v,\overline{\langle x,w\rangle} u\rangle=\langle v,T^*w\rangle$ thus $T^*v=\langle v,x\rangle u$

  $T^*Tv=\|x\|^2\langle v,u\rangle u$ let $Sv=\frac{\|x\|}{\|u\|}\langle v,u\rangle u$

  $S^2v=\frac{\|x\|}{\|u\|}\langle v,u\rangle Su=\|x\|^2\langle v,u\rangle u=T^*Tv$ thus $S^2=T^*T$

  $\langle Sv,w\rangle=\frac{\|x\|}{\|u\|}\langle v,u\rangle\langle u, w\rangle,\langle v,Sw\rangle=\frac{\|x\|}{\|u\|}\langle v,u\rangle\langle u,w\rangle$, thus $S$ is self-adjoint

  $\langle Sv,v\rangle=\frac{\|x\|}{\|u\|}\langle v,u\rangle\langle u,v\rangle=\frac{\|x\|}{\|u\|}\|\langle v,u\rangle\|^2\geq0$ 

  Hence $S$ is positive and is the unique positive square root of $T^*T$ denoted by $\sqrt{T^*T}$

  

* 3.

  For $T^*$, $\exist S\in\mathcal{L}(V)$ s.t. $T^*=S\sqrt{(T^*)^*T^*}$ which is $T^*=S\sqrt{TT^*}$ and $S$ is self-adjoint

  Since $\sqrt{TT^*}$ is self-adjoint, $T=(T^*)^*=(S\sqrt{TT^*})^*=\sqrt{TT^*}S$

  

* 5.

  With respect to standard basis of $\C^2$

  $\mathcal{M}(T^*T)=\mathcal{M}(T^*)\mathcal{M}(T)=|1\;\;\;0|$

  ​													 $|0\;16|$

  Hence the singular values of $T$ are $1,4$

  

* 7.

  With respect to standard basis of $\mathrm{F}^3$

  $\mathcal{M}(T)=|0\;2\;0|$  thus the diagonal entries of $TT^*$ are $4,9,1$

  ​				 $|0\;0\;3|$

  ​				 $|1\;0\;0|$

  Define $L\in\mathcal{L}(\mathrm{F}^3)$ by $L(z_1,...,z_3)=(2z_1,3z_2,z_3)$

  $L^2=TT^*$ and  $L$ is positive

  Suppose $S\in\mathcal{L}(\mathrm{F}^3)$ s.t. $T=SL$

  Define $S(z_1,z_2,z_3)=(z_3,z_1,z_2)$ we find such $S$

  

* 10.

  Since $T$ is self-adjoint, $T$ can be diagonalizable with respect to some basis

  Thus the eigenvalues of $T$, $\lambda_1,...,\lambda_n$ are diagonal entries of such matrix

  Thus the diagonal entris of matrix $T^*T$ are $\lambda_1\overline\lambda_1,...,\lambda_n\overline\lambda_n$

  which is also $\|\lambda_1\|^2,...,\|\lambda_n\|^2$

  Hence the singular values of $T$ are $\|\lambda_1\|,...,\|\lambda_n\|$

  

* 12.

  Let $\mathcal{M}(T)=|0\;2|$, $\mathcal{M}(T^*)=|0\;1|$, $\mathcal{M}((T^*)^2T^2)=|4\;0|$

  ​						$|1\;0|$					 $|2\;0|$								$|0\;4|$

  Hence the singular values of $T^2$ are $2,2$ however the singular values of $T$ are $2,1$

  

* 15.

  If $S$ is isometry, $\sqrt{S^*S}=I$ which eigenvalues are all 1

  If all singular values of $S$ are 1, 

  ​	this implies that all eigenvalues of $\sqrt{S^*S}$ are 1

  ​	Since $\sqrt{S^*S}$ is self-adjoint, it can be diagonalizable with respect to some basis

  ​	Hence $\sqrt{S^*S}=I$

  ​	This implies that $S$ is isometry

  

* 17.

  * a.

    $Te_i=s_if_i$ for $i=1,...,n$

    Thus with respect to $e_1,...,e_n;f_1,...,f_n$ $T$ can be diagonalizable 

    Hence the matrix of $T^*$ with respect to $f_1,...,f_n;e_1,...,e_n$is conjugate transpose of the above matrix

    Since the singular value is absolute value

    which can be written as $T^*f_i=s_ie_i$ for $i=1,...,n$

    Hence $T^*v=\sum s_i\langle v,f_i\rangle e_i$

  * b.

    $T^*Te_i=s_i^2e_i$

    Hence $T^*Tv=\sum s_i^2\langle v,e_i\rangle e_i$

  * c.

    Since $e_1,...,e_n$ are eigenvectors of $T$ corresponding to eigenvalues $s_1^2,...,s_n^2$

    $e_1,...,e_n$ are also eigenvectors of $\sqrt{T^*T}$ corresponsing to eigenvalues $s_1,...,s_n$

    Hence denote $S=\sqrt{T^*T}$, $Se_i=s_ie_i$ we get $Sv=\sum s_i\langle v,e_i\rangle e_i$

  * d.

    Since $TT^{-1}=I$

    $e_i=TT^{-1}e_i=T^{-1}Tf_i=s_iT^{-1}e_i$ thus $T^{-1}f_i=\frac {e_i}{s_i}$

    Hence $T^{-1}v=\sum \frac{\langle v,f_i\rangle e_i}{s_i}$